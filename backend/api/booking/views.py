from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import status
import datetime
from django.http import HttpResponse
from backend.settings import *
from django.core.mail import send_mail
from .models import Booking
from .serializers import BookingSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes  
from rest_framework.permissions import IsAdminUser , IsAuthenticated
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import permissions
from  rest_framework.exceptions import APIException
from api.show.utils import get_show_details_by_id
from api.movie.utils import get_movie_by_id
from .models import Booking
import json
from rest_framework import permissions
from api.booked_seats_tracker.utils import block_seats_and_return_price
from api.card_info.models import Card
from api.card_info.serializers import CardInfoSerialzer
from api.ticket.models import ticket
from api.show.models import Show
from api.booked_seats_tracker.models import BookedSeats
from api.booked_seats_tracker.serializers import BookedSeatsSerializer

class BookseatsViewset(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    def get_booking_by_user(self, request):
        receipt = Booking.objects.filter(UserAcc = request.user)
        receipt_serializer = BookingSerializer(receipt, many = True)
        print(receipt)
        return Response(receipt.data, status=status.HTTP_200_OK)
    
    def block_seats(self , request):
        data = request.data
        # print(data.get("show_id") , data.get("show_date") ,  data.get("tickets"))
        blocked_seats = block_seats_and_return_price(id = data.get("id") ,seats_to_be_blocked=data.get("seats"))
        return Response({blocked_seats } , status = status.HTTP_200_OK)
    def checkout_and_book_seats(self , request):
        cards = Card.objects.filter(UserAccount = request.user)
        cards_serilaizer = CardInfoSerialzer(cards , many = True)
        print(request.data.get("card") , "Card")
        selected_card = CardInfoSerialzer(Card.objects.filter(id = request.data.get("card")) , many = True)
        seats = []
        seats_to_be_booked = request.data.get("seats")
        print(request.data.get("seats"))
        for i in range(len(seats_to_be_booked)):
            if( seats_to_be_booked[i] == "1"):
                seats.append(i)
        i = 0
        print(selected_card.data , cards_serilaizer.data)
        tickets = ""
        if( selected_card.data[0] in cards_serilaizer.data):
            number  = Booking.objects.all().count()
            pk = (20 - len(str(number+1)))*"0"+str(number+1)
            booking = Booking( Booking_Id = pk ,  UserAccount = request.user , Show = Show.objects.get(id = request.data.get("show_id")) , total_price = float(request.data.get("total_price"))  )
            booking.save()
            print(booking.Booking_Id)
            for item in range(int(request.data.get("adult"))):
                tickets += f"adult , seat_no :{seats[i]}\n"
                ticket_obj = ticket(AgeGroup = "adult" , Seat_no = seats[i] , Booking_Id = booking )
                ticket_obj.save()
                i+=1
            for item in range(int(request.data.get("child"))):
                tickets += f"child , seat_no :{seats[i]}\n"
                ticket_obj = ticket(AgeGroup = "child" , Seat_no = seats[i] , Booking_Id = booking)
                ticket_obj.save()
                i+=1
            for item in range(int(request.data.get("senior"))):
                tickets += f"senior , seat_no :{seats[i]}\n"
                ticket_obj = ticket(AgeGroup = "senior" , Seat_no = seats[i] , Booking_Id = booking)
                ticket_obj.save()
                i+=1
            booked_seats = BookedSeats.objects.filter(id = int(request.data.get("id")))
            serializer = BookedSeatsSerializer(booked_seats , many = True)
            original_seat_map = serializer.data[0].get("booked_seats")
            booked_data = serializer.data[0]
            print(original_seat_map)
            original_seat_map = list(original_seat_map)
            print(original_seat_map)
            for item in seats:
                original_seat_map[item] = "2"
            original_seat_map = "".join(original_seat_map)
            dict_of_serializer = dict(serializer.data[0])
            dict_of_serializer["booked_seats"] =   original_seat_map
            serializer = BookedSeatsSerializer(booked_seats.first(), data = dict_of_serializer)
            if( serializer.is_valid()):
                serializer.save()
            print(booked_data.get("show_id"))
            show_details = get_show_details_by_id(booked_data.get("show_id"))
            movie_details = get_movie_by_id(show_details.get("movie_id"))
            movie_title = movie_details.get("movie_title")
            title = f"Bull Dawg Cinema Booking Confirmation"
            body = f"Movie Name : {movie_title}\n"
            body += f"Showtime : {show_details.get('start_time')}\n"
            body + f"Screen : {show_details.get('showroom_id')}\n"
            body += f"Show date : {datetime.date.today()}\n"
            body += f"Booking_date : {datetime.date.today()}\n"
            body += "Booking id : "+pk+"\n"
            body += "tickets : "+tickets+"\n"
            send_mail(
                     title,
                     body,
                    'teamb5se@gmail.com',
                     [request.user],
                     fail_silently=False,
                )   
            return Response(BookingSerializer(Booking.objects.filter(Booking_Id = booking.Booking_Id) , many = True).data, status = status.HTTP_200_OK)
        else:
            return Response({"Please provide a valid card "} , status = status.HTTP_400_BAD_REQUEST)



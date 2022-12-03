from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import status
from django.http import HttpResponse
from backend.settings import *
from .models import Booking
from .serializers import BookingSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes  
from rest_framework.permissions import IsAdminUser , IsAuthenticated
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import permissions
from  rest_framework.exceptions import APIException
from .models import Booking
import json
from rest_framework import permissions
from api.booked_seats_tracker.utils import block_seats_and_return_price

class BookseatsViewset(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    
    def book_seats(self , request):
        booking = Booking()
        booking.save()
        data = request.data
        print(data.get("show_id") , data.get("show_date") ,  data.get("tickets"))
        block_seats_and_return_price(show_id = data.get("show_id") , show_date = data.get("show_date")  ,tickets=data.get("tickets"))
        return Response(request.data , status = status.HTTP_200_OK)


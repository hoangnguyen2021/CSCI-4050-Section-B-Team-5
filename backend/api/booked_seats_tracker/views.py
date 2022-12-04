from django.shortcuts import render
# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes  
from rest_framework.permissions import IsAdminUser , IsAuthenticated
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import permissions
from  rest_framework.exceptions import APIException
from .models import BookedSeats

from .serializers import BookedSeatsSerializer

class BookedSeatsViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    def get_booked_tickets(self , request):
        booked_seats = BookedSeats.objects.filter(show_id = request.GET.get("show_id") , show_date = request.GET.get("show_date"))
        serializer = BookedSeatsSerializer(booked_seats , many = True)
        return Response(serializer.data , status = status.HTTP_200_OK)


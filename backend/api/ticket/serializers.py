from rest_framework import serializers
from .models import ticket

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = ticket
        fields = ['AgeGroup' , 'Seat_no']
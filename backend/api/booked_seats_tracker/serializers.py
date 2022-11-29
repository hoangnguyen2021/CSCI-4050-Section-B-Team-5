from rest_framework import serializers
from .models import BookedSeats

class BookedSeatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookedSeats
        fields= '__all__'
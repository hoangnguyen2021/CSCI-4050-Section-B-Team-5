from rest_framework import serializers
from .models import movie

class MovieSerializers(serializers.ModelSerializer):

    class Meta:
        model = movie 
        fields = '__all__'

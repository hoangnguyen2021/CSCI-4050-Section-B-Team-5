from rest_framework import serializers
from .models import Show


class ShowSerializers(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields= '__all__'
class ShowTimeSerializers(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields = ["showroom_id" , "start_time"] 
from rest_framework import serializers
from .models import Showroom

class ShowroomSerializers(serializers.ModelSerializer):
    class Meta:
        model = Showroom
        fields = '__all__'
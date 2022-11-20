from rest_framework import serializers
from .models import Show

class ShowSerializers(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields= '__all__'
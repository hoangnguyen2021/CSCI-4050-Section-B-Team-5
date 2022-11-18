from rest_framework import serializers
from .models import Show

class ShowSerializers(serializers.ModelSerializer):
    class Meta:
        model = Show
        exclude = ["end_time"]
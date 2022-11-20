from rest_framework import serializers
from .models import Promotions

class PromotionSerializers(serializers.ModelSerializer):

    class Meta:
        model = Promotions
        exclude = ['is_active']
        #fields = '__all__'

class InsertDataSerializers(serializers.ModelSerializer):

    class Meta:
        model = Promotions
        #fields = '__all__'
        exclude = ['is_active']

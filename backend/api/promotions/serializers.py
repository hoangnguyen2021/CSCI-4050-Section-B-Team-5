from rest_framework import serializers
from .models import Promotions

class PromotionSerializers(serializers.ModelSerializer):

    class Meta:
        model = Promotions
        exclude = ['is_active']

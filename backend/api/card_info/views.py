from .models import Card
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes  
from rest_framework.permissions import IsAdminUser , IsAuthenticated
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import permissions
from  rest_framework.exceptions import APIException
from .serializers import CardInfoSerialzer
import json
from rest_framework import permissions
from rest_framework import status
from .utils import save_card

class CardInfoViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    def get_card_info(self, request):
        serializer = CardInfoSerialzer(Card.objects.filter(UserAccount = request.user) , many = True)
        return Response(serializer.data , status = status.HTTP_200_OK)
    def save_card(self , request):
        data = request.data
        data["UserAccount"] = request.user.id
        serializer = CardInfoSerialzer(data = data)
        if( serializer.is_valid()):
            result = save_card(cardnum= serializer.data['cardnum'] , expiration_year=serializer.data['expiration_year'] , zip_code=serializer.data['zip_code'] , cvv = serializer.data['cvv'], User = serializer.data['UserAccount'])
            if( result == False):
                return Response({"Cannot store more than 3 cards"} , status = status.HTTP_200_OK)
            return Response(serializer.data , status = status.HTTP_201_CREATED )
        return Response(serializer.errors , status = status.HTTP_200_OK)

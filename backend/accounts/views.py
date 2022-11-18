from django.shortcuts import render
from rest_framework import status
from django.http import HttpResponse
from backend.settings import *
from .models import UserAccount
from .serializers import UserCreateSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes  
from rest_framework.permissions import IsAdminUser
from rest_framework import viewsets
from rest_framework.response import Response
from .models import UserAccount
import json

class UserViewSet(viewsets.ViewSet):
    permission_classes = [IsAdminUser]


    def get_user_list(self,request):
        queryset = UserAccount.objects.filter(is_staff = False , is_active = True)
        seralizer = UserCreateSerializer(queryset , many = True)
        return Response(seralizer.data , status = status.HTTP_200_OK)


    def deactivate_user(self, request):
        queryset = UserAccount.objects.filter(email = request.GET['email']).update(is_active = False)
        email = request.GET['email']
        response =  f"message : succesfully deactivated the user {email}"
        return Response({
           response
        } , status = status.HTTP_204_NO_CONTENT)


    def update_user(self, request):
        email = json.loads(request.body.decode('utf8').replace("'", '"'))["email"]
        patch =  json.loads(request.body.decode('utf8').replace("'", '"'))
        patch.pop("email")
        queryset = UserAccount.objects.filter(email = email).update(**patch)
        return Response({
            "message" : "succesfully updated the data"
        } , status = status.HTTP_204_NO_CONTENT)


    def is_admin(self , request ):
        return Response({"Admin": True} , status = status.HTTP_200_OK)





    
    





# Create your views here.

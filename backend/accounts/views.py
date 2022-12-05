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
from rest_framework import permissions
from  rest_framework.exceptions import APIException
from .models import UserAccount
import json
from rest_framework import permissions

class CustomForbidden(APIException):
    status_code = status.HTTP_200_OK
    default_detail = {"Admin" : False}
class CustomForbiddenSuccess(APIException):
    status_code = status.HTTP_200_OK
    default_detail = {"Admin" : True}
  

class CustomerAccessPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        if( request.user.is_staff == False):
            raise CustomForbidden
        else:
            raise CustomForbiddenSuccess

class GetAdmin(viewsets.ViewSet):
    permission_classes = [CustomerAccessPermission]
    def is_admin(self , request ):
        return Response({"Admin": "True"} , status = status.HTTP_200_OK)




class UserViewSet(viewsets.ViewSet):
    permission_classes = [IsAdminUser]


    def get_user_list(self,request):
        queryset = UserAccount.objects.filter(is_staff = False , is_active = True)
        seralizer = UserCreateSerializer(queryset , many = True)
        # print(request.user)
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

    def return_user_name(self, request):
        return Response({"username": request.user.name}, status = status.HTTP_200_OK)



    
    





# Create your views here.

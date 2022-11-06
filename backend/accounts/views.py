from django.shortcuts import render
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

class UserViewSet(viewsets.ViewSet):
    permission_classes = [IsAdminUser]
    def get_user_list(self,request):
        queryset = UserAccount.objects.filter(is_staff = False , is_active = True)
        seralizer = UserCreateSerializer(queryset , many = True)
        return Response(seralizer.data)
    





# Create your views here.

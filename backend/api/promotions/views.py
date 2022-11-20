from django.shortcuts import render

from django.core.mail import send_mail
from rest_framework.decorators import api_view, renderer_classes
from django.http import HttpResponse
from rest_framework.renderers import JSONRenderer

from .serializers import PromotionSerializers,InsertDataSerializers
from accounts.serializers import UserCreateSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import Promotions
from accounts.models import UserAccount
import json
from rest_framework.permissions import IsAdminUser,AllowAny
from rest_framework import viewsets
#import requests

# Create your views here.


    
# Create your views here.

def saveEmp(request):

    if request.method=='POST':
        saveSerializer = InsertDataSerializers(data=request.data)
        if saveSerializer.is_valid():
            saveSerializer.save()
            return Response(saveSerializer.data, status=status.HTTP_201_CREATED)

class PromotionsReadSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    def insertEmp(self, request):
        
        if request.method == 'POST':
            print(request)
            enteredPromotion = request.body.decode("utf-8")
            enteredPromotion = json.loads(enteredPromotion)
            promotion = enteredPromotion.get("promotion_name")
            print(enteredPromotion)
            
            saveSerializer = PromotionSerializers(data=enteredPromotion)
            
            if saveSerializer.is_valid():
                saveSerializer.save()
                
            print(saveSerializer.errors)

            user_data = UserAccount.objects.filter( promotion_subscription = True).values_list("email", flat=True)
            #emails = UserCreateSerializer(user_data, many = True).data
            #data = emails['email']
            print(user_data)
            #print(data)
        # data = emails

            jsonData = user_data
            value_list = list(user_data)
            """for x in jsonData:
                y = dict(x)
                values = y.values()
                lst = list(values)
                print(lst)

                str = ""
                for ele in lst:
                    str += ele
                print(str)
                value_list.append(str)
                print(value_list)
                #' '.join(lst)
                #value_list.append(lst)
            
            #print(value_list)
            msg = 'That is the real mess'
            #rec = ['noyondey8@gmail.com','noyondeyiit07@gmail.com']"""

            send_mail(
                    'That’s your subject Bro',
                    promotion,
                    'teamb5se@gmail.com',
                    value_list,
                    fail_silently=False,
                )   
            ##trying to send email


            return Response({
            "added"
            } , status = status.HTTP_201_CREATED)
        


        
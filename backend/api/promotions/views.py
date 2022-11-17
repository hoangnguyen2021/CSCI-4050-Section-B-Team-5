from django.shortcuts import render

from django.core.mail import send_mail
from rest_framework.decorators import api_view
from django.http import HttpResponse

from .serializers import PromotionSerializers,InsertDataSerializers
from accounts.serializers import UserCreateSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import Promotions
from accounts.models import UserAccount
import json
import requests

# Create your views here.


    
# Create your views here.
@api_view(['POST'])
def saveEmp(request):

    if request.method=='POST':
        saveSerializer = InsertDataSerializers(data=request.data)
        if saveSerializer.is_valid():
            saveSerializer.save()
            return Response(saveSerializer.data, status=status.HTTP_201_CREATED)


def insertEmp(request):

    if request.method=='POST':
        enteredPromotion = request.POST.get()
        promotion = enteredPromotion['promoName']
        
        
        saveSerializer = PromotionSerializers(data=request.enteredPromotion)
        if saveSerializer.is_valid():
            saveSerializer.save()
        

        user_data = UserAccount.objects.all()
        emails = UserCreateSerializer(user_data, many = True).data
        data = emails['email']
        
        #print(data)
       # data = emails

        jsonData = data
        value_list = []
        for x in jsonData:
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
        #rec = ['noyondey8@gmail.com','noyondeyiit07@gmail.com']

        send_mail(
                'That’s your subject Bro',
                promotion,
                'ndde08@gmail.com',
                value_list,
                fail_silently=False,
            )   
        ##trying to send email


        return render(request, 'insert.html')
    else:
        return render(request, 'insert.html')


    
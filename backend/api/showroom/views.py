from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Showroom
from .serializers import ShowroomSerializers
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAdminUser,AllowAny
from rest_framework import status
# Create your views here.


@api_view(['GET','POST','PUT','DELETE'])
@permission_classes([AllowAny])
def showroom(request):
    if request.method == "GET":
        obj = Showroom.objects.all()
        serializer = ShowroomSerializers(obj, many = True)
        return Response(serializer.data , status = status.HTTP_200_OK)

    else:
        data = request.data
        serializer = ShowroomSerializers(data=data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

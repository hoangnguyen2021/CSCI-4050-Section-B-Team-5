from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Showroom
from .serializers import ShowroomSerializers
# Create your views here.

@api_view(['GET','POST','PUT','DELETE'])
def showroom(request):
    if request.GET:
        obj = Showroom.objects.all()
        serializer = ShowroomSerializers(obj, many = True)
        return Response(serializer.data)

    else:
        data = request.data
        serializer = ShowroomSerializers(data=data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

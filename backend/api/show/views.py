from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Show
from .serializers import ShowSerializers
# Create your views here.

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def show(request):
    if request.GET:
        obj = Show.objects.all()
        serializer = ShowSerializers(obj, many = True)
        return Response(serializer.data)

    else:
        data = request.data
        serializer = ShowSerializers(data=data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Show
from api.movie.models import movie
from .serializers import ShowSerializers
# Create your views here.

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def show(request):
    if request.GET:
        obj = Show.objects.all()
        serializer = ShowSerializers(obj, many = True)
        return Response(serializer.data)

    elif request.POST:
        serializer = ShowSerializers(data=request.POST)
        if (serializer.is_valid()):
            #Todo: validate the time over near rounded time
            end_time = serializer.start_time + movie.objects.filter(id = serializer.movie_id).get("duration")
            print(end_time)
            print(end_time)
            print(type(end_time))
            return Response(serializer.data)
        return Response(serializer.errors)
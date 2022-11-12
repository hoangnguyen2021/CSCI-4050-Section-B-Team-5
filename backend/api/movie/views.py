from django.shortcuts import render
from rest_framework import viewsets
from .models import movie
import datetime
from .serializers import MovieSerializers
from rest_framework import status
from rest_framework.permissions import IsAdminUser,AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework import viewsets
from rest_framework.response import Response
import json

class MovieViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdminUser]

    def create(self, request):
        serializer = MovieSerializers(data = request.data)
        serializer.__setattr__("is_active" , False)
        serializer.__setattr__("created_at" , datetime.datetime.now() )
        serializer.__setattr__("updated_at" , datetime.datetime.now() )
        if (serializer.is_valid()):
            serializer.save()
        print(serializer.errors)
        serializer.save()

        return Response(serializer.data , status = status.HTTP_201_CREATED)


    def update(self, request):
        movie_title = json.loads(request.body.decode('utf8').replace("'", '"'))["movie_title"]
        patch =  json.loads(request.body.decode('utf8').replace("'", '"'))
        patch.pop("movie_title")
        queryset = movie.objects.filter(movie_title = movie_title).update(**patch)
        return Response({
            "message" : "succesfully updated the data"
        } , status = status.HTTP_204_NO_CONTENT)


    
class MovieReadSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    def list(self, request):
        queryset = movie.objects.filter(is_active = False)
        serializer = MovieSerializers(queryset , many = True)
        return Response(serializer.data , status = status.HTTP_200_OK)
    

     




# Create your views here.

#it will be modified!!


#for fetching Movie data
# @api_view(['GET', 'POST', 'PUT', 'DELETE'])
# def movie(request):
#     if request.GET:
#         obs = Movie.objects.all()
#         serializers = MovieSerializers(obs, many = True)
#         return Response(serializers.data)

#     else:
#         data = request.data
#         serializer = MovieSerializers(data=data)
#         if(serializer.is_valid()):
#             serializer.save()
#             return Response(serializer.data)
        
#         return Response(serializer.errors)


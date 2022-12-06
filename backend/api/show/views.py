from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAdminUser,AllowAny
from rest_framework import status
from django.utils.dateparse import parse_time
from api.booked_seats_tracker.utils import CreateBookedSeatsInstance
import datetime
from .models import Show
from api.movie.models import movie
from .serializers import ShowSerializers , ShowTimeSerializers
from api.showroom.models import Showroom
import json
from .models import Show
import asyncio
# Create your views here.
def round_end_time_to_near_zero(end_time):
    end_time_copy = parse_time(str(end_time))
    end_time = str(end_time)
    hours = 0
    minutes = end_time[-5:-3]
    minutes = int(minutes)
    if( minutes == 0 or  minutes == 30):
        minutes = minutes
    elif(  minutes < 30):
        minutes = 30
    elif(  minutes > 30):
        minutes = 0
        hours = 1
    return datetime.timedelta(hours = end_time_copy.hour+hours , minutes = minutes)

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
@permission_classes([AllowAny]) 
def show(request):
    if request.method == "GET":
        obj = Show.objects.filter(movie_id = int(request.GET.get("movie_id")) ,  start_date__lte = datetime.date.today() , end_date__gte = datetime.date.today())
        serializer = ShowTimeSerializers(obj, many = True)
        return Response(serializer.data)

    elif request.method == "POST":
        data = json.loads(request.body)
        duration = list(movie.objects.filter(id = data.get("movie_id")).values_list("movie_duration" , flat = True))[0]
        end_time = parse_time(data.get("start_time"))
        duration =  parse_time(str(duration))
        start_time = datetime.timedelta(hours = end_time.hour , minutes=end_time.minute , seconds=end_time.second)
        duration_time = datetime.timedelta(hours = duration.hour , minutes= duration.minute , seconds= duration.second)
        end_time = round_end_time_to_near_zero(start_time+duration_time+datetime.timedelta(minutes=15))


        mid_start_times = Show.objects.filter(
        start_date__lte = datetime.datetime.strptime(data.get("start_date") , "%Y-%m-%d").date() ,
        end_date__lte = datetime.datetime.strptime(data.get("end_date") , "%Y-%m-%d").date(),
        end_date__gte = datetime.datetime.strptime(data.get("start_date") , "%Y-%m-%d").date(),
        showroom_id  = data.get("showroom_id"))


        mid_end_times = Show.objects.filter(
            start_date__gte = datetime.datetime.strptime(data.get("start_date") , "%Y-%m-%d").date(),
            end_date__gte = datetime.datetime.strptime(data.get("end_date") , "%Y-%m-%d").date(),
            start_date__lte = datetime.datetime.strptime(data.get("end_date") , "%Y-%m-%d").date() ,
             showroom_id  = data.get("showroom_id"))

        start_times_end_times_in_mid = Show.objects.filter(
            start_date__gte = datetime.datetime.strptime(data.get("start_date") , "%Y-%m-%d").date(),
            end_date__lte = datetime.datetime.strptime(data.get("end_date") , "%Y-%m-%d").date(),
            start_date__lte = datetime.datetime.strptime(data.get("end_date") , "%Y-%m-%d").date() ,
            end_date__gte = datetime.datetime.strptime(data.get("start_date") , "%Y-%m-%d").date(),
             showroom_id  = data.get("showroom_id"))
        
        start_times_and_end_times_are_outside = Show.objects.filter(
            start_date__lte = datetime.datetime.strptime(data.get("start_date") , "%Y-%m-%d").date(),
            end_date__gte = datetime.datetime.strptime(data.get("end_date") , "%Y-%m-%d").date(),
             showroom_id  = data.get("showroom_id"))
        
        other_start_times = mid_start_times | mid_end_times | start_times_end_times_in_mid | start_times_and_end_times_are_outside
        for item in other_start_times:
            print(item)
        flag = 0
        print(end_time)
        if( len(other_start_times) == 0):
            data["end_time"] = str(end_time)
            print(data)
            serializer = ShowSerializers(data = data)
            if( serializer.is_valid()):
                obj = serializer.save()
                CreateBookedSeatsInstance(start_date=obj.start_date , end_date= obj.end_date , show_id=obj.id)
                return Response(serializer.data , status=status.HTTP_201_CREATED)
            print(serializer.errors)
            

        for item in other_start_times:
            print(item.__getattribute__("start_date") , item.__getattribute__("end_date"))
            start_time_itr,end_time_itr = parse_time(str(item.__getattribute__("start_time"))) , parse_time(str(item.__getattribute__("end_time")))
            start_time_itr,end_time_itr = datetime.timedelta(hours = start_time_itr.hour , minutes= start_time_itr.minute , seconds= start_time_itr.second) ,datetime.timedelta(hours = end_time_itr.hour , minutes= end_time_itr.minute , seconds= end_time_itr.second)
            if( start_time >= start_time_itr and start_time <= end_time_itr):
                flag = 0
                #notschedule the movie
            elif ( end_time >= start_time_itr and end_time <= end_time_itr):
                flag = 0
                #not schedule the movie
            else:
                flag =1 
                #schedule the movie
            if( flag == 0):
                 return Response({"cannot add movie because it conflicts with existing movie schedules"} , status = status.HTTP_409_CONFLICT)
            data["end_time"] = str(end_time)
            serializer = ShowSerializers(data = data)
            if( serializer.is_valid()):
                obj = serializer.save()
                CreateBookedSeatsInstance(start_date=obj.start_date , end_date= obj.end_date , show_id=obj.id)
                return Response(serializer.data , status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors , status = status.HTTP_200_OK)
       


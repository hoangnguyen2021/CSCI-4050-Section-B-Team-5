from .models import BookedSeats
import datetime
from api.show.models import Show
from api.show.serializers import ShowTimeSerializers , ShowSerializers
from .models import BookedSeats
from .serializers import BookedSeatsSerializer
import threading
import time

def CreateBookedSeatsInstance(start_date , end_date , show_id):
    print(start_date , end_date)
    delta_date_object = end_date-start_date
    delta = max( delta_date_object.days , 0)
    for i in range(0, delta+1):
        booked_seats  = BookedSeats(show_date = start_date + datetime.timedelta(days = i) , show_id = Show.objects.get(id = show_id) )
        booked_seats.save()
def block_seats_and_return_price(id ,  seats_to_be_blocked):
    booked_seats = BookedSeats.objects.filter(id = int(id))
    serializer = BookedSeatsSerializer( booked_seats , many = True)
    original_seat_map = serializer.data[0].get("booked_seats")
    final_seat_map = ""
    seat_numbers = []
    for i in range(100):
        if( seats_to_be_blocked[i] == "1"):
            seat_numbers.append(i)
        if( original_seat_map[i] == "1" or  seats_to_be_blocked[i] == "1"):
            final_seat_map+="1"
        else:
            final_seat_map += original_seat_map[i]
    dict_of_serializer = dict(serializer.data[0])
    dict_of_serializer["booked_seats"] =   final_seat_map
    print(len(final_seat_map))
    serializer = BookedSeatsSerializer(booked_seats.first(), data = dict_of_serializer)
    if( serializer.is_valid()):
        serializer.save()
    threading.Thread(target=unblock_tickets_if_not_booked , args=(seat_numbers , id )).start()
    
    return final_seat_map

def get_booked_seat_tracker_details_by_id(id):
    booked_seats = BookedSeats.objects.filter(id = id)
    serializer = BookedSeatsSerializer(booked_seats.first() , many=False)
    return serializer.data[0]
def unblock_tickets_if_not_booked(seats , id ):
    time.sleep(240)
    booked_seats = BookedSeats.objects.filter(id = int(id))
    serializer = BookedSeatsSerializer( booked_seats , many = True)
    original_seat_map = list(serializer.data[0].get("booked_seats"))
    for i in range(100):
        if( original_seat_map[i] == "1" and i in seats):
            original_seat_map[i]="0"
    original_seat_map = "".join(original_seat_map)
    dict_of_serializer = dict(serializer.data[0])
    dict_of_serializer["booked_seats"] = original_seat_map
    serializer = BookedSeatsSerializer(booked_seats.first(), data = dict_of_serializer)
    if( serializer.is_valid()):
        serializer.save()

    

    

    



    #iterate from start to end and create a object

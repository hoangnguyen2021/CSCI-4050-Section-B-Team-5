from .models import BookedSeats
import datetime
from api.show.models import Show
from api.show.serializers import ShowTimeSerializers , ShowSerializers
from .models import BookedSeats
from .serializers import BookedSeatsSerializer

def CreateBookedSeatsInstance(start_date , end_date , show_id):
    print(start_date , end_date)
    delta_date_object = end_date-start_date
    delta = max( delta_date_object.days , 0)
    for i in range(0, delta+1):
        booked_seats  = BookedSeats(show_date = start_date + datetime.timedelta(days = i) , show_id = Show.objects.get(id = show_id) )
        booked_seats.save()
def block_seats_and_return_price(id ,  tickets ):
    booked_seats = BookedSeats.objects.filter(id = int(id))
    serializer = BookedSeatsSerializer( booked_seats , many = True)
    seats_to_block = list(map( int , tickets.keys()))
    seats = list(serializer.data[0].get("booked_seats"))
    dict_of_serializer = dict(serializer.data[0])
    for seat in seats_to_block:
        seats[seat] = '1'
    seats = "".join(seats)
    dict_of_serializer["booked_seats"] =   seats
    serializer = BookedSeatsSerializer(booked_seats.first(), data = dict_of_serializer)
    if( serializer.is_valid()):
        serializer.save()
    



    #iterate from start to end and create a object

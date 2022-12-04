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
    for i in range(1, delta+1):
        booked_seats  = BookedSeats(show_date = start_date + datetime.timedelta(days = i) , show_id = Show.objects.get(id = show_id) )
        booked_seats.save()
def block_seats_and_return_price(show_id , show_date , tickets ):
    booked_seats = BookedSeats.objects.filter(show_id = int(show_id) , show_date =  show_date)
    serializer = BookedSeatsSerializer( booked_seats , many = True)
    for ticket in tickets:
        print(ticket)

    print(serializer.data)



    #iterate from start to end and create a object

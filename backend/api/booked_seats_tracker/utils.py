from .models import BookedSeats
import datetime
from api.show.models import Show

def CreateBookedSeatsInstance(start_date , end_date , show_id):
    print(start_date , end_date)
    delta_date_object = end_date-start_date
    delta = max( delta_date_object.days , 0)
    for i in range(1, delta+1):
        booked_seats  = BookedSeats(show_date = start_date + datetime.timedelta(days = i) , show_id = Show.objects.get(id = show_id) )
        booked_seats.save()



    #iterate from start to end and create a object

from django.db import models
from api.show.models import Show
import datetime

# Create your models here.
class BookedSeats(models.Model):
    show_id = models.ForeignKey(Show , on_delete=models.CASCADE)
    show_date = models.DateField(default=datetime.date.today())
    booked_seats = models.CharField(max_length=100 , default="0"*100)


    


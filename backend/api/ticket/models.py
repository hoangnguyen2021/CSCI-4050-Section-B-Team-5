from django.db import models

# Create your models here.
from django.db import models
from accounts.models import UserAccount
from api.show.models import Show
from api.booking.models import Booking
# Create your models here.

class ticket(models.Model):
    AgeGroup = models.CharField(max_length=30)
    Seat_no = models.IntegerField()
    Ticket_holder_name = models.CharField(max_length=100)
    Booking_Id = models.ForeignKey(Booking , on_delete=models.CASCADE)





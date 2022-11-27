from django.db import models
from accounts.models import UserAccount
from show.models import Show
from booking.models import Booking
# Create your models here.

class Ticket(models.Model):
    UserAccount = models.ForeignKey(UserAccount , on_delete=models.CASCADE)
    AgeGroup = models.CharField(max_length=30)
    Show = models.ForeignKey(Show , on_delete=models.CASCADE)
    Seat_no = models.IntegerField()
    Ticket_holder_name = models.CharField(max_length=100)
    Booking_Id = models.ForeignKey(Booking , on_delete=models.CASCADE)





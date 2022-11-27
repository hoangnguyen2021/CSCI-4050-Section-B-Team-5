from django.db import models
from accounts.models import UserAccount
import datetime
from show.models import Show


# Create your models here.
class Booking(models.model):
    UserAccount = models.ForeignKey(UserAccount , on_delete=models.CASCADE)
    Booking_Id = models.CharField(max_length=300 , primary_key=True)
    Booking_date = models.DateField(default=datetime.datetime.today)
    Show = models.ForeignKey(Show , on_delete=models.CASCADE)
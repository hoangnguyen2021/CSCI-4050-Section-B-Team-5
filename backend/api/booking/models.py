from django.db import models

# Create your models here.
from django.db import models
from accounts.models import UserAccount
import datetime
from api.show.models import Show


# Create your models here.
class Booking(models.Model):
    UserAccount = models.ForeignKey(UserAccount , on_delete=models.CASCADE)
    Booking_Id = models.CharField(max_length=20 , primary_key=True)
    show_date = models.DateField(default = datetime.date.today)
    Booking_date = models.DateField(default=datetime.date.today)
    Show = models.ForeignKey(Show , on_delete=models.CASCADE)
    total_price = models.FloatField()
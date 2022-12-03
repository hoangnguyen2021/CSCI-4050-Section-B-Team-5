from django.db import models
from accounts.models import UserAccount


# Create your models here.
class Card(models.Model):
    UserAccount = models.ForeignKey(UserAccount , on_delete= models.CASCADE
        )
    cardnum = models.CharField(max_length = 16, default = "", blank=True)
    cvv = models.CharField(max_length = 3, default = "", blank=True)
    expiration_year = models.CharField(max_length = 4, default = "", blank=True)
    zip_code = models.CharField(max_length = 5, default ="30605", blank=True)

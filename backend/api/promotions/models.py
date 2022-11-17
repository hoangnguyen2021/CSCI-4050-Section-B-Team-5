from django.db import models

# Create your models here.
class Promotions(models.Model):
    promoName = models.CharField(max_length = 300)
    promoCode = models.CharField(max_length = 300)
    expireDate = models.CharField(max_length = 300)
    percentage = models.FloatField()

#class InsertData(models.Model):
 #   promoInfo = models.CharField(max_length = 400)
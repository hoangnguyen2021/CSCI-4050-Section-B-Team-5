from django.db import models

# Create your models here.
class Promotions(models.Model):
    promotion_info = models.CharField(max_length = 300)
    promo_code = models.CharField(max_length = 300)
    is_active = models.BooleanField()
    percentage = models.FloatField(max = 100.00)

    #subscribed = models.JSONField()
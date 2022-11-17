from django.db import models

# Create your models here.
class Promotions(models.Model):
    promotion_info = models.CharField(max_length = 300)
    promo_code = models.CharField(max_length = 8)
    is_active = models.BooleanField(default="false")
    percentage = models.FloatField(max = 100.00)

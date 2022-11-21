from django.db import models

# Create your models here.
class Promotions(models.Model):
    promotion_name = models.CharField(max_length = 300)
    promotion_code = models.CharField(max_length = 8, unique=True, default="abc")
    is_active = models.BooleanField(default=False)
    promotion_percentage = models.FloatField()
    promotion_expiration = models.DateField()
from django.db import models

# Create your models here.

class Showroom(models.Model):
    #//place seat information in whatever way we decide

    showRoom_name = models.CharField(max_length=200, unique=True)
    #// upon checkout, the remaining seats decrement
    #// need to find a way to store the seat location info
    #{
    # row: 'A',
    # n: '12',
    # availability: 'true'
    #}
    # The seat A12 is available for booking
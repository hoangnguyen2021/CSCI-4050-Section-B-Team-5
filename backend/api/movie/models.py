from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
import datetime
# Create your models here.

class movie(models.Model):
    movie_title = models.CharField(max_length = 100 , unique = True)
    movie_category = models.CharField(max_length = 100)

    movie_cast = models.CharField(max_length=3000)
    #// csv of all cast
    director = models.CharField(max_length = 100)
    producer = models.CharField(max_length = 300)
    synopsis = models.CharField(max_length = 3000)
    trailer_pic_url = models.URLField()
    trailer_video_url = models.URLField()
    rating = models.IntegerField(validators=[
            MaxValueValidator(4)
        ])
    is_active = models.BooleanField(default = False)  
    movie_duration = models.DurationField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    release_date = models.DateField(default=datetime.date.today)

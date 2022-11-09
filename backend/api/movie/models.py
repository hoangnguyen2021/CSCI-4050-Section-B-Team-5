from django.db import models

# Create your models here.

class Movie(models.Model):
    movie_title = models.CharField(max_length = 100)
    #movie_category = models.IntegerField() //it can be a string Horror, only a type for a movie
    movie_category = models.CharField(max_length = 100)

    movie_cast = models.CharField(max_length = 300)
    director = models.CharField(max_length = 100)
    producer = models.CharField(max_length = 300)
    synopsis = models.CharField(max_length = 300)
    reviews = models.CharField(max_length = 300)
    trailer_pic = models.URLField()
    trailer_video = models.URLField()
    rating = models.IntegerField(max = 3)
    is_active = models.BooleanField()  
    movie_duration = models.DurationField()

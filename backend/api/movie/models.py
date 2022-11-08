from django.db import models

# Create your models here.

class Movie(models.Model):
    movie_title = models.CharField(max_length = 100)
    #movie_category = models.IntegerField() //it can be a string Horror, only a type for a movie
    movie_category = models.CharField(max_length = 100)

    movie_cast = models.CharField()
    #// csv of all cast
    director = models.CharField(max_length = 100)
    producer = models.CharField(max_length = 300)
    synopsis = models.CharField(max_length = 300)
    reviews = models.CharField(max_length = 300)
    trailer_pic = models.URLField()
    trailer_video = models.URLField()
    rating = models.IntegerField()
    #//0:G, 1:PG, 2:PG-13, 3:R, 4:NC-17
    release_date = models.DateField()
    #//YYYY-MM-DD as string

    #//ticket_price = models.FloatField()
    #//ticket prices are static based upon age-- not the movie itself
    is_active = models.BooleanField()  
    movie_duration = models.DurationField()
    #//Store as minutes

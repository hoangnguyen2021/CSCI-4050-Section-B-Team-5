from django.db import models

# Create your models here.

class Show(models.Model):
    start_time = models.TimeField()
    end_time = models.TimeField()
    #//movie table, calculate show_time + duration rounded to nearest
    #//30 mins

    #//if the end_time is too close to a 30 min interval,
    #//the show_time for the next movie must be the NEXT time
    #//interval. There must be at least 10 minutes between the end_time
    #// of one movie and the show_time of the next movie.

    show_date = models.DateField()

    #// first movie runs at 9:00 AM
    #// last movie runs at 10:00 PM

    movie_id = models.CharField()
    #//foreign key from movie table

    
    remaining_seats = models.IntegerField()
    #// goes in showroom
    #// upon checkout, the remaining seats decrement
    #// need to find a way to store the seat location info
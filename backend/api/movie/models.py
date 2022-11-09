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
    trailer_pic = models.ImageField(upload_to = 'pics/')#this has to be a hyperlink field (models.URLField)
    trailer_video = models.FileField(upload_to='videos/', null=True, verbose_name="")  #same goes in here
    rating = models.FloatField()
    show_date = models.DateField() 
    #// showroom table, movie id will be a foreign key
    show_time = models.TimeField() 
    #// showroom table, movie id will be a foreign key

    ticket_price = models.FloatField()
    is_active = models.BooleanField()  
    movie_duration = models.FloatField()

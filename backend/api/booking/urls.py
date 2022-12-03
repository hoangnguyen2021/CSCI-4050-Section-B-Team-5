from rest_framework import routers
from django.urls import path , include
from . import views

urlpatterns = [
    path("book-tickets" , views.BookseatsViewset.as_view({"post": "book_seats"}))

]
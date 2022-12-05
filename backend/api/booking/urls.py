from rest_framework import routers
from django.urls import path , include
from . import views

urlpatterns = [
    path("block-tickets" , views.BookseatsViewset.as_view({"put": "block_seats"})),
    path("checkout-and-bookseats" , views.BookseatsViewset.as_view({"post":"checkout_and_book_seats"}) ),

]
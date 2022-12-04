from rest_framework import routers
from django.urls import path , include
from . import views

urlpatterns =[
    path("getbookedtickets" , views.BookedSeatsViewSet.as_view({"get":"get_booked_tickets"}))
]
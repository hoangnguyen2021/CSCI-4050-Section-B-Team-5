from rest_framework import routers
from django.urls import path , include
from . import views

urlpatterns = [
    path('create' , views.MovieViewSet.as_view({"post":"create"})),
    path('list' , views.MovieReadSet.as_view({"get":"list"})),
    path('update' , views.MovieViewSet.as_view({"patch" : "update"}) ),

]
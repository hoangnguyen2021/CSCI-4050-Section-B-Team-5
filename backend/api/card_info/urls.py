from rest_framework import routers
from django.urls import path , include
from . import views

urlpatterns = [
    path("get-card-info" , views.CardInfoViewSet.as_view({"get": "get_card_info"})),
    path("save-card" , views.CardInfoViewSet.as_view({"post":"save_card"})),

]
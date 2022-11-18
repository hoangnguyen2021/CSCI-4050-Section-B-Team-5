
from django.urls import path , include
from . import views


urlpatterns = [
    path('savePromo/' , views.saveEmp),
    path('addpromotion', views.insertEmp),
    
]
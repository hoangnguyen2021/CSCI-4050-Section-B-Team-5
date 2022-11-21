
from django.urls import path , include
from . import views


urlpatterns = [
    path('savePromo/' , views.saveEmp),
    path('create', views.PromotionsReadSet.as_view({"post":"insertEmp"})),
    
]
from django.urls import path , include
from .views import show
urlpatterns = [
    path("schedule" , show  ),
    path("getshowtimes" , show),
]
from django.urls import include , path



urlpatterns = [
    path('movie/' ,include('api.movie.urls') ),
]
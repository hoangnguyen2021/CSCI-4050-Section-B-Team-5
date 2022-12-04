from django.urls import include , path



urlpatterns = [
    path('movie/' ,include('api.movie.urls') ),
    path('promotions/', include('api.promotions.urls')),
    path('show/' , include('api.show.urls')),
    path('showroom/' , include('api.showroom.urls') ),
    path('booking/' , include('api.booking.urls')),
    path('cards/' , include('api.card_info.urls')),
]
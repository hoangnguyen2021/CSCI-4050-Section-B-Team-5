from rest_framework import routers
from django.urls import path , include
from . import views

urlpatterns = [
    path('create' , views.MovieViewSet.as_view({"post":"create"})),
    path('list' , views.MovieReadSet.as_view({"get":"list"})),
    path('update' , views.MovieViewSet.as_view({"patch" : "update"}) ),
    path('search_movie_title_alt', views.MovieSearchSet.as_view({"get":"search_movie_title_alt"})),
    path('search_movie_category_al', views.MovieSearchSet.as_view({"get":"search_movie_category_al"})),
    path('filter_director', views.MovieSearchSet.as_view({"get":"director"})),
    path('get_movie_by_id' , views.MovieSearchSet.as_view({"get":"get_movie_by_id"})),

]
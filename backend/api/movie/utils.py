from .models import movie
from .serializers import MovieSerializers

def get_movie_by_id(id):
    queryset = movie.objects.filter(id = id)
    serializer = MovieSerializers(queryset , many= True)
    return serializer.data[0]
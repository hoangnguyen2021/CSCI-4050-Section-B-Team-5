from django.shortcuts import render


# Create your views here.

#it will be modified!!


#for fetching Movie data
@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def movie(request):
    if request.GET:
        obs = Movie.objects.all()
        serializers = MovieSerializers(obs, many = True)
        return Response(serializers.data)

    else:
        data = request.data
        serializer = MovieSerializers(data=data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors)


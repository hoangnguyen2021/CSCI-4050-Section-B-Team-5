from .models import Show
from .serializers import ShowSerializers
import datetime

def get_show_details_by_id(id):
    obj = Show.objects.filter(id = int(id) ,  start_date__lte = datetime.date.today() , end_date__gte = datetime.date.today())
    serializer = ShowSerializers(obj, many = True)
    print(serializer.data)
    return serializer.data[0]
from django.urls import include , path
from .views import UserViewSet
from .views import GetAdmin



urlpatterns = [
  path('' , UserViewSet.as_view({'get' : 'get_user_list'}) ),
  path('deactivate' , UserViewSet.as_view({'get' : 'deactivate_user'})),
  path('updateuserinfo' , UserViewSet.as_view({'patch' : 'update_user'})),
  path('isadmin' , GetAdmin.as_view({'get':'is_admin'}))
]
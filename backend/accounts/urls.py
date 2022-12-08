from django.urls import include , path
from .views import UserViewSet , UserProfileSet
from .views import GetAdmin



urlpatterns = [
  path('' , UserViewSet.as_view({'get' : 'get_user_list'}) ),
  path('deactivate' , UserViewSet.as_view({'get' : 'deactivate_user'})),
  path('updateuserinfo' , UserViewSet.as_view({'patch' : 'update_user'})),
  path('isadmin' , GetAdmin.as_view({'get':'is_admin'})),
  path('username' , UserViewSet.as_view({'get':'return_user_name'})),
  path('changepassword' , UserProfileSet.as_view({'get' : 'change_password'})),

]
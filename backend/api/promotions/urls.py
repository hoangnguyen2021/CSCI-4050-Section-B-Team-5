
from django.urls import path , include
from . import views


urlpatterns = [
    path('savePromo/' , views.saveEmp),
    path('create', views.PromotionsReadSet.as_view({"post":"insertEmp"})),
    path('promotion-list', views.PromotionsReadSet.as_view({"get":"get_promtion_list"})),
    path('get-promotion-by-id' , views.PromotionsReadSet.as_view({"get":"get_promotion_by_id"})),
]
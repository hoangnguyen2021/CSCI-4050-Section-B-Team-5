from pyexpat import model
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
User = get_user_model()
class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'name','email','phonenumber', 'password',
        'cardnum', 'cvv', 'expiration_year', 'zip_code', 'promotion_subscription')

from email.policy import default
from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractBaseUser , PermissionsMixin , BaseUserManager

class UserAccountManager(BaseUserManager):
    def create_user(self,email,name, phonenumber, zip_code, cardnum, cvv, expiration_year, promotion_subscription, password=None):
        if not email:
            raise ValueError('Users Must have an email')
        email = self.normalize_email(email)
        user = self.model(email=email , name=name, phonenumber=phonenumber, cardnum=cardnum, cvv=cvv, expiration_year=expiration_year, zip_code=zip_code, promotion_subscription = promotion_subscription)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self,email,name, phonenumber, zip_code, cardnum, cvv, expiration_year, password=None ):
        if not email:
            raise ValueError('Users Must have an email')
        email = self.normalize_email(email)
        user = self.model(email=email , name=name, phonenumber=phonenumber, cardnum=cardnum, cvv=cvv, expiration_year=expiration_year, zip_code=zip_code , is_staff = True)
        user.set_password(password)
        user.save()
        return user


class UserAccount(AbstractBaseUser , PermissionsMixin ):
    email = models.EmailField(max_length = 225 , unique=True)
    name = models.CharField(max_length = 225)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default=False)
    phonenumber = models.CharField(max_length=10)
    cardnum = models.CharField(max_length = 16, default = "", blank=True)
    cvv = models.CharField(max_length = 3, default = "", blank=True)
    expiration_year = models.CharField(max_length = 4, default = "", blank=True)
    zip_code = models.CharField(max_length = 5, default ="30605", blank=True)
    promotion_subscription = models.BooleanField(default = False)

    objects = UserAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'phonenumber', 'zip_code', 'cardnum', 'cvv', 'expiration_year','promotion_subscription']

   

    def get_name(self):
        return self.name
    def __str__(self):
        return self.email

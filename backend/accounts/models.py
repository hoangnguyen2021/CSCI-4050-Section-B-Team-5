from email.policy import default
from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractBaseUser , PermissionsMixin , BaseUserManager

class UserAccountManager(BaseUserManager):
    def create_user(self,email,name ,  phonenumber , password=None ):
        if not email:
            raise ValueError('Users Must have an email')
        email = self.normalize_email(email)
        user = self.model(email=email , name=name , phonenumber = phonenumber)
        user.set_password(password)
        user.save()
        return user

    # def create_super_user():


class UserAccount(AbstractBaseUser , PermissionsMixin ):
    email = models.EmailField(max_length = 225 , unique=True)
    name = models.CharField(max_length = 225)
    phonenumber = models.CharField(max_length = 12)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default=False)
    objects = UserAccountManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

   

    def get_name(self):
        return self.name
    def __str__(self):
        return self.email
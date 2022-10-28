from email.policy import default
from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractBaseUser , PermissionsMixin , BaseUserManager

class UserAccountManager(BaseUserManager):
    def create_user(self,email,name , password=None):
        if not email:
            raise ValueError('Users Must have an email')
        email = self.normalize_email(email)
        user = self.model(email=email , name=name)
        user.set_password(password)
        user.save()
        return user

    # def create_super_user():

    def edit_user(self, email, name, password):
        
        return user

class UserAccount(AbstractBaseUser , PermissionsMixin ):
    email = models.EmailField(max_length = 225 , unique=True)
    name = models.CharField(max_length = 225)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default=False)
    cardnum = models.CharField(max_length = 16, default = None, blank = True)
    cvv = models.CharField(max_length = 3, default = None, blank = True)
    expiration_year = models.CharField(max_length = 4, default = None, blank = True)
    zip_code = models.CharField(max_length = 5, default = None, blank = True)
    objects = UserAccountManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

   

    def get_name(self):
        return self.name
    def __str__(self):
        return self.email

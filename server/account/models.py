from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinLengthValidator
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.hashers import make_password

# Create your models here.

class Role(models.Model):
    role_name = models.CharField(max_length=10)

    def __str__(self):
        return self.role_name

class Account(models.Model):
    name = models.CharField(max_length=50)
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=250)
    email = models.EmailField(max_length=100)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)

    def save(self):
    # Save the provided password in hashed format
        self.password = make_password(self.password)
        super(Account, self).save()

    def __str__(self):
        return self.username

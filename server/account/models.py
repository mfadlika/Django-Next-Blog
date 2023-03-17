from django.db import models
from django.core import validators
from django.core.validators import MinLengthValidator, MaxValueValidator, MaxLengthValidator

# Create your models here.

class Account(models.Model):
    name = models.CharField(max_length=20)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50, validators=[MinLengthValidator[8]])
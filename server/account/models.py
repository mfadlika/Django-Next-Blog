from django.db import models
from django.core.validators import EmailValidator, MinLengthValidator
from django.contrib.auth.hashers import make_password

# Create your models here.

class Role(models.Model):
    role_name = models.CharField(max_length=10)

    def __str__(self):
        return self.role_name

class Account(models.Model):
    name = models.CharField(max_length=50, blank=True)
    username = models.CharField(unique=True, max_length=20, null=False, blank=False)
    password = models.CharField(max_length=250,null=False, blank=False, validators=[MinLengthValidator(limit_value=8)])
    email = models.EmailField(unique=True, max_length=100, null=False, blank=False, validators=[EmailValidator(message="Invalid email")])
    role = models.ForeignKey(Role, on_delete=models.CASCADE, default=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
    # Save the provided password in hashed format
        self.password = make_password(self.password)
        super(Account, self).save(*args, **kwargs)

    def __str__(self):
        return self.username
    
class Post(models.Model):
    post = models.TextField(max_length=1000, null=False)
    author = models.ForeignKey(Account, on_delete=models.CASCADE, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    

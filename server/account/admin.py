from django.contrib import admin

from .models import Account, Role

# Register your models here.

admin.site.register(Account)
admin.site.register(Role)

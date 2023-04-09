from django.contrib import admin

from .models import Account, Role, Post

# Register your models here.

admin.site.register(Account)
admin.site.register(Role)
admin.site.register(Post)

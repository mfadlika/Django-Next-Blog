from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('csrf', views.get_csrf_token)
]
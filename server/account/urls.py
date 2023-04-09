from django.urls import path
from . import views
from .views import Posts

urlpatterns = [
    path('signup', views.signup),
    path('signin', views.signin),
    path('index', Posts.as_view())
]
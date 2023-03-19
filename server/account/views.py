from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.core import serializers
from .models import Account
from django.middleware.csrf import get_token

# Create your views here.

def index(request):
    model_account = Account.objects.all()
    serialize_model_account = serializers.serialize('json', model_account, fields=('name', 'username'))
    return HttpResponse(serialize_model_account, content_type="application/json")

def get_csrf_token(requests):
    get_token(requests)
    return JsonResponse({})
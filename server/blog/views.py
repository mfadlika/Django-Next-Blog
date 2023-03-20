from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.shortcuts import render

# Create your views here.

def get_csrf_token(req):
    get_token(req)
    return JsonResponse({})
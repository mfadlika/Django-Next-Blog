import json, jwt
from operator import itemgetter
from blog import settings
from django.contrib.auth.hashers import check_password
from django.http import HttpResponse, JsonResponse, HttpRequest
from .forms import AccountForm
from .models import Account, Post
from django.views.decorators.csrf import csrf_exempt
from django.forms.models import model_to_dict
from rest_framework.views import APIView
from django.core import serializers
from django.db.models import Count

# Create your views here.

@csrf_exempt
def signup(req):
    data = req.body.decode('utf8')
    json_data = json.loads(data)
    form = AccountForm(json_data)

    if form.is_valid():
        form.save()
        return HttpResponse(status=200)
    else:
        data = json.loads(form.errors.as_json())
        error = []
        for x in data.values():
            error.append(x[0]['message'])
        return JsonResponse({'error' : error}, status=403)

@csrf_exempt
def signin(req):
    if req.method == "POST":
        print(req.headers)
        data = req.body.decode('utf8')
        json_data = json.loads(data)
        username, password = itemgetter('username', 'password')(json_data['data'])
        try:
            user = Account.objects.get(username=username)
            if check_password(password, user.password) == False:
                return JsonResponse({"error": "Password didn't match"}, status=403)
        except:
            return JsonResponse({'error' : 'Account not found'}, status=404)
        encoded = jwt.encode({"username":username}, settings.JWT_SECRET_KEY)
        return JsonResponse({'token': encoded.decode('utf8')}, status=200)

def verify(req):
    auth = req.headers
    token = auth['Authorization']
    try:
        auth = jwt.decode(token, settings.JWT_SECRET_KEY)
        user = Account.objects.get(username=auth['username'])
    except Exception as e:
        raise e
    return user

class Posts(APIView):
    def get(self, req, *args, **kwargs):
        user = verify(req)
        posts = Post.objects.select_related('author')
        print(Post.objects.select_related('author').get(id=1).author)
        posts = serializers.serialize("json", posts)
        posts = json.loads(posts)
        return JsonResponse({"data": posts}, status=200)
    
    def post(self, req, *args, **kwargs):
        user = verify(req)
        post = json.loads(req.body)
        Post.objects.create(post=post['post'], author=user)
        return JsonResponse({}, status=200)

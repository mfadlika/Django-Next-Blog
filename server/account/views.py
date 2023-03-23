import datetime, json, jwt
from operator import itemgetter
from blog import settings
from django.contrib.auth.hashers import check_password
from django.http import HttpResponse, JsonResponse
from dotenv import load_dotenv
from .forms import AccountForm
from .models import Account

load_dotenv()

# Create your views here.

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

def signin(req):
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

def verify(req, user):
    auth = req.headers
    token = auth['Authorization']
    print(token)
    try:
        auth = jwt.decode(token, settings.JWT_SECRET_KEY)
        if auth['username'] != user:
            return JsonResponse({},status=403)
    except Exception as e:
        raise e
    return JsonResponse({}, status=200)

def index(req):
    status = verify(req, 'django')
    return status

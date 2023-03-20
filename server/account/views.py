import json
from django.http import JsonResponse, HttpResponse
from .forms import AccountForm

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
    pass
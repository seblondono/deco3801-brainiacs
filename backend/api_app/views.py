from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Voter
from django.contrib.auth.hashers import check_password
import ast
# Create your views here.
@csrf_exempt
def new_voter(request):
    if request.method == "POST":
        try:
            data = ast.literal_eval(request.body.decode("utf-8"))
            voter = Voter()
            voter.email = data["email"]
            voter.password = data["password"]
            voter.fname =data["fname"]
            voter.lname =data["lname"]
            if data["postcode"] == "":
                data["postcode"]=0
            voter.postcode =data["postcode"]
            if Voter.objects.all().filter(email=voter.email).count()!=0:
                message = "Email already used"
            else:
                message = "Success"
                voter.save()
        except Exception as e:
            message = "E: "+str(e)
    else:
        message = "NOT POST"
    return JsonResponse({'message':message})


@csrf_exempt
def login_voter(request):
    if request.method == "POST":
        try:
            data = ast.literal_eval(request.body.decode("utf-8"))
            voter_query = Voter.objects.all().filter(email=data["email"])
            if voter_query.count() == 0:
                message = "Email not registered"
            elif check_password(data["password"], voter_query[0].password):
                message = "Success"
            else:
                message = "Incorrect password"
        except Exception as e:
            message = "E: "+str(e)
    else:
        message = "NOT POST"
    return JsonResponse({'message':message})
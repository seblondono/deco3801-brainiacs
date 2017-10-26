from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Voter, ImageEntry
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

@csrf_exempt
def make_vote(request):
    if request.method == "POST":
        try:
            data = ast.literal_eval(request.body.decode("utf-8"))
            scores = [3,2,1]
            votes = data[1:]
            email = data[0]
            voter =  Voter.objects.all().filter(email=email)
            if voter.count() == 0:
                message = "You need to log in."
            elif voter[0].voted:
                message = "Already voted."
            else:
                voter=voter[0]
                for i, vote in enumerate(votes):
                    entry=ImageEntry.objects.all().filter(key=vote['key'])
                    if entry.count()==0:
                        entry=ImageEntry()
                        entry.key=vote['key']
                        entry.title=vote['title']
                        entry.author=vote['author']
                        entry.description=vote['description']
                        entry.url=vote['url']
                        entry.votes=scores[i]
                    else:
                        entry=entry[0]
                        entry.votes+=scores[i]
                    entry.save()
                voter.voted=True
                voter.save()
                message="Vote Submitted"

        except Exception as e:
            message = "E: "+str(e)
    else:
        message = "NOT POST"
    return JsonResponse({'message':message})


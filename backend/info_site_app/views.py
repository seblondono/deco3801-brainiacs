from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.timezone import localtime, now
from django.core import serializers
from .models import InfoForm, Visit
import json
import ast

@csrf_exempt
def info_form_submit(request):
	if request.is_ajax():
		try:
			data =ast.literal_eval(request.POST.dict()['data'])
			info = {}
			for i in data:
				info[i["name"]]=i["value"]	
			form = InfoForm()
			form.fname = info["name"]
			form.lname = info["lastName"]
			form.email = info["email"]
			form.comment = info["comment"]
			if InfoForm.objects.all().filter(fname=form.fname).filter(lname=form.lname).filter(email=form.email).filter(comment=form.comment).count()!=0:
				message = "Already Submitted"
			else:
				message = "Submitted"
				form.save()
		except Exception as e:
			message="E"+str(e)
		
	else:
		message = "NOT AJAX"
	return JsonResponse({'message':"From Server:"+message})

@csrf_exempt
def new_visit(request):
	if request.is_ajax():
		if request.body.decode('utf-8')=="info-visit":
			curr_date=localtime(now()).date()
			if Visit.objects.all().filter(time=curr_date).count()==0:
				visit = Visit()
				visit.time = curr_date
			else:
				visit = Visit.objects.all().filter(time=curr_date)[0]
			visit.count += 1
			visit.save()
			message = str(visit.count)
		else:
			message = "Wrong data code"	
	else:
		message = "Not AJAX"
	return JsonResponse({'message':'From Server:'+message})

@csrf_exempt
def get_visits(request):
	data = serializers.serialize("json", Visit.objects.all())
	return JsonResponse(data, safe=False)


@csrf_exempt
def get_comments(request):
	data = serializers.serialize("json", InfoForm.objects.all().order_by('-time'))
	return JsonResponse(data, safe=False)


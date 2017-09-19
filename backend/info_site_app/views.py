from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def info_form_submit(request):
	if request.is_ajax():
		message = "AJAX!"
	else:
		message = "NOT AJAX"
	return JsonResponse({'message':message})
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def new_voter():
    if request.is_ajax():
        message = "AJAX"
    else:
        message = "NOT AJAX"
    return JsonResponse({'message':'From Server:'+message})
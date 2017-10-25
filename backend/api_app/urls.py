from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^voter/new/', views.new_voter, name='new_voter'),
]

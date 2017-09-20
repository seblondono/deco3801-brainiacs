from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^info_form_submit/', views.info_form_submit, name='info_form_submit'),
	url(r'^new_visit/', views.new_visit, name='new_visit'),
	url(r'^data/visits/',views.get_visits, name='get_visits'),
	url(r'^data/comments/', views.get_comments, name='get_comments'),
]

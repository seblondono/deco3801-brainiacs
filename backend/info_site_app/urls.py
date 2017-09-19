from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^info_form_submit/', views.info_form_submit, name='info_form_submit'),
]
from django.db import models
from django.utils import timezone

# Create your models here.
def get_time():
	return timezone.now().replace(microsecond=0)

class Visit(models.Model):
	time = models.DateTimeField(default=get_time)

class InfoForm(models.Model):
	time = models.DateTimeField(default=get_time)
	fname = models.TextField(null=True, blank = True)
	lname = models.TextField(null=True, blank = True)
	email = models.TextField(null=True, blank = True)
	comment = models.TextField(null=True, blank = True)

	def __str__(self):
		return " | ".join([self.fname,self.lname, str(self.time)])
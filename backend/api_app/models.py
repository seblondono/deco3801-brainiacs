from django.db import models

# Create your models here.
class Voter(models.Model):
	email = models.TextField(unique=True)
	password = models.TextField()
	fname = models.TextField(null=True, blank=True)
	lname = models.TextField(null=True, blank=True)
	postcode = models.Field(null=True, blank=True)

	def __str__(self):
		return str(self.email)
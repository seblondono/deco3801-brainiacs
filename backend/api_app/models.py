from django.db import models
from django.contrib.auth.hashers import make_password

# Create your models here.
class Voter(models.Model):
    email = models.TextField(unique=True)
    password = models.TextField()
    fname = models.TextField(null=True, blank=True)
    lname = models.TextField(null=True, blank=True)
    postcode = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return str(self.email)
   
    def save(self, *args, **kwargs):
        self.password = make_password(self.password)
        super(Model, self).save(*args, **kwargs)

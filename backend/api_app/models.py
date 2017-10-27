from django.db import models
from django.contrib.auth.hashers import make_password

# Create your models here.
class Voter(models.Model):
    email = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=150)
    fname = models.CharField(max_length=50, null=True, blank=True)
    lname = models.CharField(max_length=50, null=True, blank=True)
    postcode = models.IntegerField(null=True, blank=True)
    voted = models.BooleanField(default=False)
    
    def __str__(self):
        return str(self.email)
   
    def save(self, *args, **kwargs):
        #check password isn't already hashed
        if "argon2$argon2" not in self.password:
            self.password = make_password(self.password)
        super(Voter, self).save(*args, **kwargs)

class ImageEntry(models.Model):
    key = models.CharField(max_length=100, unique=True)
    url = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.TextField()
    votes = models.IntegerField(default=0)

    def __str__(self):
            return " | ".join([str(self.title), str(self.votes)+" Votes"])

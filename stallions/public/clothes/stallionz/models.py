from django.db import models
from django.utils import timezone

# Create your models here.
class Login(models.Model):
    email = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=20)
    role = models.CharField(max_length=10)
    def __str__(self):
        return self.email

class Registartion(models.Model):
    name = models.CharField(max_length=40)
    email = models.CharField(max_length=50, unique=True)
    number = models.CharField(max_length=10)
    login_id = models.OneToOneField(Login, on_delete=models.CASCADE)
    role = models.CharField(max_length=10)
    def __str__(self):
        return self.email
    
class Product(models.Model):
    productname = models.CharField(max_length=30)
    price = models.CharField(max_length=30)
    category = models.CharField(max_length=30)
    mandate = models.CharField(max_length=30)
    color = models.CharField(max_length=30)
    size = models.CharField(max_length=30)
    gender = models.CharField(max_length=30)
    occasion = models.CharField(max_length=30)
    image = models.ImageField(upload_to='images/',null=True)
    def __str__(self):
        return self.productname
    
class Cart(models.Model):
    productid = models.CharField(max_length=30)
    userid = models.CharField(max_length=30)
    quantity = models.CharField(max_length=30)
    ststus = models.CharField(max_length=30)
    def __str__(self):
        return self.userid
    
class Review(models.Model):
    time_raised = models.DateTimeField(default=timezone.now, editable=False)
    reference = models.CharField(unique=True, max_length=20)
    description = models.TextField()
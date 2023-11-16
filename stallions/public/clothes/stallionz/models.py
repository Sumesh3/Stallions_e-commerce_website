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
    productname = models.CharField(max_length=500)
    price = models.CharField(max_length=30)
    category = models.CharField(max_length=30)
    mandate = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    size = models.CharField(max_length=30)
    gender = models.CharField(max_length=30)
    occasion = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images/', null=True)

    def __str__(self):
        return self.productname


class Review(models.Model):
    productid = models.CharField(max_length=30)
    userid = models.CharField(max_length=30)
    productname = models.CharField(max_length=500)
    username = models.CharField(max_length=30)
    time_raised = models.DateTimeField(default=timezone.now, editable=False)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.username


class Cart(models.Model):
    productid = models.CharField(max_length=30)
    userid = models.CharField(max_length=30)
    quantity = models.CharField(max_length=30)
    cart_status = models.CharField(max_length=30)
    productname = models.CharField(max_length=500)
    price = models.CharField(max_length=500)
    color = models.CharField(max_length=500)
    size = models.CharField(max_length=500)
    image = models.CharField(max_length=500)
    category = models.CharField(max_length=500)
    gender = models.CharField(max_length=500)
    total_price = models.CharField(max_length=500)

    def __str__(self):
        return self.userid


class Wishlist(models.Model):
    productid = models.CharField(max_length=30)
    userid = models.CharField(max_length=30)
    productname = models.CharField(max_length=500)
    price = models.CharField(max_length=500)
    color = models.CharField(max_length=500)
    size = models.CharField(max_length=500)
    image = models.CharField(max_length=500)
    category = models.CharField(max_length=500)
    gender = models.CharField(max_length=500)

    def __str__(self):
        return self.userid


class Address(models.Model):
    userid = models.OneToOneField(Login, on_delete=models.CASCADE, unique=True)
    name = models.CharField(max_length=30)
    number = models.CharField(max_length=10)
    pincode = models.CharField(max_length=10)
    locality = models.CharField(max_length=500)
    address = models.CharField(max_length=500)
    city = models.CharField(max_length=500)
    state = models.CharField(max_length=500)
    landmark = models.CharField(max_length=500, null=True, blank=True)
    altnumber = models.CharField(max_length=500, null=True, blank=True)

    def __str__(self):
        return self.name


class place_order(models.Model):
    user = models.CharField(max_length=20)
    productname = models.CharField(max_length=500)
    productid = models.CharField(max_length=30)
    quantity = models.CharField(max_length=30)
    color = models.CharField(max_length=500)
    size = models.CharField(max_length=500)
    image = models.CharField(max_length=500)
    category = models.CharField(max_length=500)
    gender = models.CharField(max_length=500)
    grandtotal = models.CharField(max_length=500)
    # pyment_status = models.CharField(max_length=500)
    order_status = models.CharField(max_length=500)


class Final_pyment(models.Model):
    userid = models.CharField(max_length=20)
    name = models.CharField(max_length=20)
    pyment_status = models.CharField(max_length=20)
    grandtotal = models.CharField(max_length=20)
    productname = models.CharField(max_length=200)
    productid = models.CharField(max_length=200)
    quantity = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    size = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    category = models.CharField(max_length=200)
    gender = models.CharField(max_length=200)
    pyment_type = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Cardpayment(models.Model):
    userid = models.ForeignKey(Login, on_delete=models.CASCADE)
    cardnumber = models.CharField(max_length=30)
    validmonth = models.CharField(max_length=2)
    validyear = models.CharField(max_length=2)
    cardccv = models.CharField(max_length=10)
    cardholder = models.CharField(max_length=30)
    paidamount = models.CharField(max_length=30)

    def __str__(self):
        return self.cardholder

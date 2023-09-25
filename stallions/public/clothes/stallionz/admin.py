from django.contrib import admin

# Register your models here.
from .models import Registartion, Login, Product, Cart

admin.site.register(Registartion)
admin.site.register(Login)
admin.site.register(Product)
admin.site.register(Cart)

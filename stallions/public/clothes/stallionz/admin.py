from django.contrib import admin

# Register your models here.
from .models import Registartion, Login, Product, Cart, Review, Wishlist, Address, Cardpayment, Final_pyment, place_order

admin.site.register(Registartion)
admin.site.register(Login)
admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(Review)
admin.site.register(Wishlist)
admin.site.register(Address)
admin.site.register(Cardpayment)
admin.site.register(Final_pyment)
admin.site.register(place_order)
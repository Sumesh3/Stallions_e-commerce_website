from rest_framework import serializers
from .models import Registartion, Login, Product, Cart

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registartion
        fields = '__all__'
    def create(serlf,validated_data):
        return Registartion.objects.create(**validated_data)

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
    def create(serlf,validated_data):
        return Product.objects.create(**validated_data)
    
class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'
    def create(serlf,validated_data):
        return Cart.objects.create(**validated_data)
from rest_framework import serializers
from .models import Registartion, Login, Product, Cart, Review, Wishlist, Address, Cardpayment, Final_pyment


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registartion
        fields = '__all__'

    def create(serlf, validated_data):
        return Registartion.objects.create(**validated_data)


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def create(serlf, validated_data):
        return Product.objects.create(**validated_data)


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

    def create(serlf, validated_data):
        return Cart.objects.create(**validated_data)


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

    def create(serlf, validated_data):
        return Review.objects.create(**validated_data)


class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = '__all__'

    def create(serlf, validated_data):
        return Wishlist.objects.create(**validated_data)


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

    def create(serlf, validated_data):
        return Address.objects.create(**validated_data)
    

class CardpaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cardpayment
        fields = '__all__'

    def create(serlf, validated_data):
        return Cardpayment.objects.create(**validated_data)


class Final_pyment_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Final_pyment
        fields = '__all__'

    def create(serlf, validated_data):
        return Final_pyment.objects.create(**validated_data)

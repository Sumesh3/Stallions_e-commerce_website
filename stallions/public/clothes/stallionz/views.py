from django.shortcuts import render
from django.conf import settings
from django.db.models import Q

# Create your views here.
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from .models import Registartion, Login, Product, Cart, Review
from .serializers import RegisterSerializer, LoginSerializer, ProductSerializer, CartSerializer, ReviewSerializer


class registration_api(GenericAPIView):
    serializer_class = RegisterSerializer
    serializer_class_login = LoginSerializer

    def post(self, request):
        login_id = ""
        name = request.data.get('name')
        email = request.data.get('email')
        number = request.data.get('number')
        password = request.data.get('password')
        role = 'user'

        print(name)
        if (Registartion.objects.filter(email=email)):
            return Response({'message': 'Duplicate email Found!'}, status=status.HTTP_400_BAD_REQUEST)
        elif (Registartion.objects.filter(number=number)):
            return Response({'message': 'Duplicate Phonenumber Found!'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login = self.serializer_class_login(
                data={'email': email, 'password': password, 'role': role})

        if serializer_login.is_valid():
            log = serializer_login.save()
            login_id = log.id
            print(login_id)

        serializer = self.serializer_class(
            data={'name': name, 'email': email, 'number': number, 'password': password, 'login_id': login_id, 'role': role})
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Registration Successfully', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'Registration failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)


class login_api(GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        logreg = Login.objects.filter(email=email, password=password)
        if (logreg.count() > 0):
            read_serializer = LoginSerializer(logreg, many=True)
            for i in read_serializer.data:
                login_id = i['id']
                role = i['role']
                registar_data = Registartion.objects.filter(
                    login_id=login_id).values()
                for i in registar_data:
                    id = i['id']
                    name = i['name']
                    number = i['number']

            return Response({'data': {'login_id': login_id, 'user_id': id, 'email': email, 'password': password, 'name': name, 'number': number, 'role': role}, 'success': 1, 'message': 'Logged in successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'username or password is invalid'}, status=status.HTTP_400_BAD_REQUEST)


class single_user_api_view(GenericAPIView):
    def get(self, request, id):
        queryset = Registartion.objects.get(pk=id)
        serializer = RegisterSerializer(queryset)
        return Response(serializer.data)


class view_user_api(GenericAPIView):
    serializer_class = RegisterSerializer

    def get(self, request):
        user = Registartion.objects.all()
        if (user.count() > 0):
            serializer = RegisterSerializer(user, many=True)
            return Response({'data': serializer.data, 'message': 'data get', 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)


class update_single_user_api(GenericAPIView):
    Serializer_class = RegisterSerializer

    def put(self, request, id):
        queryset = Registartion.objects.get(pk=id)
        print(queryset)
        serializer = RegisterSerializer(
            instance=queryset, data=request.data, partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'updated successfully', 'success': 1}, status=status.HTTP_200_OK)


class delete_user_api(GenericAPIView):
    def delete(self, request, id):
        delmember = Registartion.objects.get(pk=id)
        delmember.delete()
        return Response({'message': 'Deleted successfully'})

# Product_section


class add_product_api(GenericAPIView):
    Serializer_class = ProductSerializer

    def post(self, request):
        productname = request.data.get('productname')
        price = request.data.get('price')
        category = request.data.get('category')
        mandate = request.data.get('mandate')
        color = request.data.get('color')
        size = request.data.get('size')
        image = request.data.get('image')
        gender = request.data.get('gender')
        occasion = request.data.get('occasion')
        serializer = self.Serializer_class(
            data={'image': image, 'productname': productname, 'price': price, 'category': category, 'mandate': mandate, 'color': color, 'size': size, 'gender': gender, 'occasion': occasion})

        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Product Added successfully', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)


class view_product_api(GenericAPIView):
    serializer_class = ProductSerializer

    def get(self, request):
        store = Product.objects.all()
        if (store.count() > 0):
            serializer = ProductSerializer(store, many=True)
            return Response({'data': serializer.data, 'message': 'data get', 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)


class single_product_APTView(GenericAPIView):
    def get(self, request, id):
        queryset = Product.objects.get(pk=id)
        serializer = ProductSerializer(queryset)
        return Response(serializer.data)


class search_product_api(GenericAPIView):
    def post(self, request):
        query = request.data.get('query')
        print(query)

        queryset = Product.objects.filter(
            Q(productname__icontains=query) | Q(category__icontains=query)
        ).values()
        print(queryset)

        i = Product.objects.filter(productname__icontains=query) | Product.objects.filter(
            category__icontains=query)
        for dta in i:
            print(dta)

        # data = [{'productname': info.productname, 'price': info.price, 'category': info.category, 'mandate': info.mandate, 'color': info.color, 'size': info.size, 'gender': info.gender}
        #         for info in i]
        # return Response({'data': data, 'message': 'Successfully fetched', 'success': True}, status=status.HTTP_200_OK)

        for obj in queryset:

            obj['image'] = settings.MEDIA_URL+str(obj['image'])
        return Response({'data': queryset, 'message': 'Successfully fetched', 'success': True}, status=status.HTTP_200_OK)
    

class add_review_api(GenericAPIView):
    serializer_class = ReviewSerializer

    def post(self, request):
        reference = request.data.get('reference')
        description = request.data.get('description')
        time_raised = request.data.get('time_raised')

        serializer = self.serializer_class(
            data={'reference': reference, 'description': description, 'time_raised': time_raised})
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Successfully add review', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)

 

class add_cart_api(GenericAPIView):
    serializer_class = CartSerializer

    def post(self, request):
        productid = request.data.get('productid')
        userid = request.data.get('userid')
        quantity = 1
        ststus = 0

        serializer = self.serializer_class(
            data={'productid': productid, 'userid': userid, 'quantity': quantity, 'ststus': ststus})
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Added to cart', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'failed to add product to cart', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)
    

class view_cart_api(GenericAPIView):
    def get(self, request, id):
        queryset = Cart.objects.get(pk=id)
        serializer = CartSerializer(queryset)
        return Response(serializer.data)
    
   
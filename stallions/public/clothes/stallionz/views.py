from django.shortcuts import render
from django.conf import settings
from django.db.models import Q

# Create your views here.
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from .models import Registartion, Login, Product, Cart, Review, Wishlist, Address, Cardpayment, Final_pyment
from .serializers import RegisterSerializer, LoginSerializer, ProductSerializer, CartSerializer, ReviewSerializer, WishlistSerializer, AddressSerializer, CardpaymentSerializer, Final_pyment_Serializer
from .PythonMail import sendmail
from .qr import Generateqr
x = 0
data = ""
z = ""
    
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
    
class update_single_product_api(GenericAPIView):
    Serializer_class = ProductSerializer

    def put(self, request, id):
        queryset = Product.objects.get(pk=id)
        print(queryset)
        serializer = ProductSerializer(
            instance=queryset, data=request.data, partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'updated successfully', 'success': 1}, status=status.HTTP_200_OK)




class delete_product_api(GenericAPIView):
    def delete(self, request, id):
        delproduct = Product.objects.get(pk=id)
        delproduct.delete()
        return Response({'message': 'Deleted successfully'})

# SEARCH


class search_product_api(GenericAPIView):
    def post(self, request):
        query = request.data.get('query')
        print(query)
        if (query!=""):
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
        else:
            return Response({'message': 'no result found', 'success': True}, status=status.HTTP_200_OK)

            

# REVIEW SECTION

class add_review_api(GenericAPIView):
    serializer_class = ReviewSerializer

    def post(self, request):
        productid = request.data.get('productid')
        userid = request.data.get('userid')
        productname = ""
        username = ""
        description = request.data.get('description')
        time_raised = ""

        product_data = Product.objects.filter(id=productid).values()
        for i in product_data:
            productname = i['productname']
            print(productname)

        user_data = Registartion.objects.filter(login_id=userid).values()
        for i in user_data:
            username = i['name']
            print(username)

        serializer = self.serializer_class(
            data={'productid': productid, 'userid': userid, 'productname': productname, 'username': username, 'description': description, 'time_raised': time_raised})
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Successfully add review', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)


class view_single_review_api(GenericAPIView):
    def get(self, request, id):
        queryset = Review.objects.get(pk=id)
        serializer = ReviewSerializer(queryset)
        return Response(serializer.data)


class view_review_api(GenericAPIView):
    serializer_class = ReviewSerializer

    def get(self, request):
        review = Review.objects.all()
        if (review.count() > 0):
            serializer = ReviewSerializer(review, many=True)
            return Response({'data': serializer.data, 'message': 'data get', 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)


class update_single_review_api(GenericAPIView):
    Serializer_class = ReviewSerializer

    def put(self, request, id):
        queryset = Review.objects.get(pk=id)
        print(queryset)
        serializer = ReviewSerializer(
            instance=queryset, data=request.data, partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'updated successfully', 'success': 1}, status=status.HTTP_200_OK)


class delete_review_api(GenericAPIView):
    def delete(self, request, id):
        delreview = Review.objects.get(pk=id)
        delreview.delete()
        return Response({'message': 'Deleted successfully'})

# CART SECTION


class add_cart_api(GenericAPIView):
    serializer_class = CartSerializer

    def post(self, request):
        productid = request.data.get('productid')
        userid = request.data.get('userid')
        quty = request.data.get('quantity')
        quantity = int(quty)
        cart_status = "0"

        carts = Cart.objects.filter(productid=productid, userid=userid)
        if carts.exists():
            return Response({'message': 'Item is already in cart', 'success': False}, status=status.HTTP_400_BAD_REQUEST)

        else:
            product_data = Product.objects.filter(id=productid).values()
            print(product_data)
            for i in product_data:
                productname = i['productname']
                prices = i['price']
                color = i['color']
                size = i['size']
                image = i['image']
                category = i['category']
                gender = i['gender']
                price = int(prices)
                total_price1 = price*quantity
                print(total_price1)

            serializer = self.serializer_class(
                data={'productid': productid, 'userid': userid, 'quantity': quantity, 'cart_status': cart_status, 'productname': productname, 'price': price, 'color': color, 'size': size, 'image': image, 'category': category, 'gender': gender, 'total_price': total_price1})
            if serializer.is_valid():
                serializer.save()
                return Response({'data': serializer.data, 'message': 'Added to cart', 'success': 1}, status=status.HTTP_200_OK)
                # return Response({'data': {'productid': productid, 'userid': userid, 'quantity': quantity, 'status': cart_status,'productname':productname, 'price':price, 'color':color, 'size':size, 'image':image, 'category':category, 'gender':gender, 'total_price':total_price} , 'message': 'Added to cart', 'success': 1}, status=status.HTTP_200_OK)
            return Response({'message': 'failed to add product to cart', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)


class view_cart_api(GenericAPIView):
    def get(self, request, id):
        cart_pro = Cart.objects.filter(userid=id)
        if (cart_pro.count() > 0):
            serializer = CartSerializer(cart_pro, many=True)
            return Response({'data': serializer.data, 'message': 'data get', 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)


class delete_cart_product_api(GenericAPIView):
    def delete(self, request, id):
        delproduct = Cart.objects.get(pk=id)
        delproduct.delete()
        return Response({'message': 'Deleted successfully'})


class update_cart_api(GenericAPIView):
    Serializer_class = CartSerializer

    def put(self, request, id):
        queryset = Cart.objects.get(pk=id)
        serializer = CartSerializer(
            instance=queryset, data=request.data, partial=True)
        z = request.data
        print(z)
        p = int(z['quantity'])
        cart_data = Cart.objects.filter(pk=id).values()
        for i in cart_data:
            price = i['price']
        price = int(price)
        total = price*p
        data2 = {'total_price': total, "quantity": p}
        serializer = CartSerializer(
            instance=queryset, data=data2, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'updated successfully', 'success': 1}, status=status.HTTP_200_OK)


# WISHLIST PART

class add_wishlist_api(GenericAPIView):
    serializer_class = WishlistSerializer

    def post(self, request):
        productid = request.data.get('productid')
        userid = request.data.get('userid')

        wlishlist = Wishlist.objects.filter(productid=productid, userid=userid)
        if wlishlist.exists():
            return Response({'message': 'Item is already in wlishlist', 'success': False}, status=status.HTTP_400_BAD_REQUEST)

        else:
            product_data = Product.objects.filter(id=productid).values()
            print(product_data)
            for i in product_data:
                productname = i['productname']
                price = i['price']
                color = i['color']
                size = i['size']
                image = i['image']
                category = i['category']
                gender = i['gender']

            serializer = self.serializer_class(
                data={'productid': productid, 'userid': userid, 'productname': productname, 'price': price, 'color': color, 'size': size, 'image': image, 'category': category, 'gender': gender})
            if serializer.is_valid():
                serializer.save()
                return Response({'data': serializer.data, 'message': 'Added to wlishlist', 'success': 1}, status=status.HTTP_200_OK)
            return Response({'message': 'failed to add product to wlishlist', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)


class view_wishlist_api(GenericAPIView):
    def get(self, request, id):
        wishlist_pro = Wishlist.objects.filter(userid=id)
        if (wishlist_pro.count() > 0):
            serializer = WishlistSerializer(wishlist_pro, many=True)
            return Response({'data': serializer.data, 'message': 'data get', 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)


class delete_wishlist_product_api(GenericAPIView):
    def delete(self, request, id):
        delproduct = Wishlist.objects.get(pk=id)
        delproduct.delete()
        return Response({'message': 'Deleted successfully'})

# ADDRESS SECTION


class address_api(GenericAPIView):
    serializer_class = AddressSerializer

    def post(self, request):
        userid = request.data.get('userid')
        name = request.data.get('name')
        number = request.data.get('number')
        pincode = request.data.get('pincode')
        locality = request.data.get('locality')
        address = request.data.get('address')
        city = request.data.get('city')
        state = request.data.get('state')
        landmark = request.data.get('landmark')
        altnumber = request.data.get('altnumber')

        serializer = self.serializer_class(
            data={'userid': userid, 'name': name, 'number': number, 'pincode': pincode, 'locality': locality, 'address': address, 'city': city, 'state': state, 'landmark': landmark, 'altnumber': altnumber})

        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Address Added successfully', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)


class view_address_api(GenericAPIView):
    def get(self, request, id):
        user_address = Address.objects.filter(userid=id)
        if (user_address.count() > 0):
            serializer = AddressSerializer(user_address, many=True)
            return Response({'data': serializer.data, 'message': 'data get', 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)


class update_address_api(GenericAPIView):
    Serializer_class = AddressSerializer

    def put(self, request, id):
        queryset = Address.objects.get(pk=id)
        print(queryset)
        serializer = AddressSerializer(
            instance=queryset, data=request.data, partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'updated successfully', 'success': 1}, status=status.HTTP_200_OK)


class delete_user_api(GenericAPIView):
    def delete(self, request, id):
        deladdress = Address.objects.get(pk=id)
        deladdress.delete()
        return Response({'message': 'Deleted successfully'})


class card_payment_api(GenericAPIView):
    serializer_class = CardpaymentSerializer

    def post(self, request):
        userid = request.data.get('userid')
        cardnumber = request.data.get('cardnumber')
        validmonth = request.data.get('validmonth')
        validyear = request.data.get('validyear')
        cardccv = request.data.get('cardccv')
        cardholder = request.data.get('cardholder')
        paidamount = request.data.get('paidamount')

        serializer = self.serializer_class(
            data={'userid': userid, 'cardnumber': cardnumber, 'validmonth': validmonth, 'validyear': validyear, 'cardholder': cardholder, 'cardccv': cardccv, 'paidamount': paidamount})

        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Payment successfull', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)

# OTP VERIFICATION


class OTP_Verification_API(GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        email = request.data.get('email')
        product_data = Registartion.objects.filter(email=email).values()
        print(product_data)
        for i in product_data:
            username = i['name']

        global data
        data = email
        print(email)
        sendotp = Login.objects.filter(email=email)
        print(sendotp)

        if (sendotp.count() > 0):
            global x
            x = sendmail(email, username)
            print(x)

            return Response({'data': {'email': email}, 'success': 1, 'message': 'Send OTP successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'Invalid E-mail id'}, status=status.HTTP_400_BAD_REQUEST)


class OTP_Checking_API(GenericAPIView):

    def post(self, request):
        otp = request.data.get('otp')
        y = int(otp)
        print(y)

        print(x)
        if (x == y):
            print("working")
            global z
            z = data

            return Response({'success': 1, 'message': 'OTP successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'Incorrect OTP'}, status=status.HTTP_400_BAD_REQUEST)


class Update_Password_API(GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        password = request.data.get('pass')
        cpassword = request.data.get('cpass')

        if password == cpassword:
            try:
                user = Login.objects.get(email=z)
                user.password = password
                user.save()
                return Response({'success': 1, 'message': 'Password updated successfully'}, status=status.HTTP_200_OK)
            except Login.DoesNotExist:
                return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)

# CHANGE PASSWORD


class password_change_api(GenericAPIView):
    serializer_class = LoginSerializer

    def put(self, request, id):
        currentpass = request.data.get('currentpass')
        updatepass = request.data.get('updatepass')
        newpass = request.data.get('newpass')
        userid = request.data.get('userid')

        password_data = Login.objects.get(id=userid)

        if password_data.password == currentpass:
            if newpass == updatepass:
                password_data.password = updatepass
                password_data.save()
                return Response({'success': 1, 'message': 'update password successfully'}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)


class generateqr_api(GenericAPIView):

    def post(self, request):
        grandtotal = request.data.get('grandTotal')
        print(grandtotal)
        Generateqr(grandtotal)
        return Response({'message': 'QR Generated  successfully', 'success': 1}, status=status.HTTP_200_OK)


class final_pyment_api(GenericAPIView):
    serializer_class = Final_pyment_Serializer

    def post(self, request):
        userid = request.data.get('userid')
        name = request.data.get('name')
        pyment_status = request.data.get('pyment_status')
        grandtotal = request.data.get('grandtotal')

        serializer = self.serializer_class(
            data={'userid': userid, 'name': name, 'pyment_status': pyment_status, 'grandtotal': grandtotal})

        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Payment successfull', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)


class generate_order_number(GenericAPIView):
    def get(self, request, id):
        queryset = Final_pyment.objects.get(pk=id)
        order_id = queryset.id
        order_number = order_id + 999
        # serializer = Final_pyment_Serializer(queryset)
        return Response({ 'order_number':order_number})

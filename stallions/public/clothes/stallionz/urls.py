from django.urls import path
from .import views

urlpatterns = [
    path("registration_api", views.registration_api.as_view(), name="registration_api"),
    path("login_api", views.login_api.as_view(), name="login_api"),
    path("single_user_api_view/<int:id>", views.single_user_api_view.as_view(), name="single_user_api_view"),
    path("update_single_user_api/<int:id>", views.update_single_user_api.as_view(), name="update_single_user_api"),
    path("delete_user_api/<int:id>", views.delete_user_api.as_view(), name="delete_user_api"),
    path("view_user_api", views.view_user_api.as_view(), name="view_user_api"),

    path("add_product_api", views.add_product_api.as_view(), name="add_product_api"),
    path("view_product_api", views.view_product_api.as_view(), name="view_product_api"),
    path("single_product_APTView/<int:id>", views.single_product_APTView.as_view(), name="single_product_APTView"),
    path("delete_product_api/<int:id>", views.delete_product_api.as_view(), name="delete_product_api"),
    path("search_product_api", views.search_product_api.as_view(), name="search_product_api"),

    path("add_review_api", views.add_review_api.as_view(), name="add_review_api"),
    path("view_review_api", views.view_review_api.as_view(), name="view_review_api"),
    path("view_single_review_api/<int:id>", views.view_single_review_api.as_view(), name="view_single_review_api"),
    path("update_single_review_api/<int:id>", views.update_single_review_api.as_view(), name="update_single_review_api"),
    path("delete_review_api/<int:id>", views.delete_review_api.as_view(), name="delete_review_api"),

    path("add_cart_api", views.add_cart_api.as_view(), name="add_cart_api"),
    path("view_cart_api/<int:id>", views.view_cart_api.as_view(), name="view_cart_api"),
    path("delete_cart_product_api/<int:id>", views.delete_cart_product_api.as_view(), name="delete_cart_product_api"),
    path("update_cart_api/<int:id>", views.update_cart_api.as_view(), name="update_cart_api"),

    path("add_wishlist_api", views.add_wishlist_api.as_view(), name="add_wishlist_api"),
    path("view_wishlist_api/<int:id>", views.view_wishlist_api.as_view(), name="view_wishlist_api"),
    path("delete_wishlist_product_api/<int:id>", views.delete_wishlist_product_api.as_view(), name="delete_wishlist_product_api"),

    path("address_api", views.address_api.as_view(), name="address_api"),
    path("view_address_api/<int:id>", views.view_address_api.as_view(), name="view_address_api"),
    path("update_address_api/<int:id>", views.update_address_api.as_view(), name="update_address_api"),
    path("delete_user_api/<int:id>", views.delete_user_api.as_view(), name="delete_user_api"),

    path("card_payment_api", views.card_payment_api.as_view(), name="card_payment_api"),

    path("OTP_Verification_API", views.OTP_Verification_API.as_view(), name="OTP_Verification_API"),
    path("OTP_Checking_API", views.OTP_Checking_API.as_view(), name="OTP_Checking_API"),
    path("Update_Password_API", views.Update_Password_API.as_view(), name="Update_Password_API"),
    path("password_change_api/<int:id>", views.password_change_api.as_view(), name="password_change_api"),

    path("generateqr_api", views.generateqr_api.as_view(), name="generateqr_api"),
    path("final_pyment_api", views.final_pyment_api.as_view(), name="final_pyment_api"),
    path("generate_order_number/<int:id>", views.generate_order_number.as_view(), name="generate_order_number"),
    path("update_single_product_api/<int:id>", views.update_single_product_api.as_view(), name="update_single_product_api"),

]
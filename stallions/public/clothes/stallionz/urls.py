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

    path("add_cart_api", views.add_cart_api.as_view(), name="add_cart_api"),
    path("search_product_api", views.search_product_api.as_view(), name="search_product_api"),
]
from django.urls import path
from .views import *
from . import views

urlpatterns = [
    path('', view_index, name='index'),
    path('order/', view_order_page, name='order_page'),
    path('order/customer/', view_customer_page, name='customer_info'),
    path('order/customer/confirm/<int:id>', view_confirmation_page, name='confirmation'),
    path('success/', view_success_page, name='order_succesful')
]

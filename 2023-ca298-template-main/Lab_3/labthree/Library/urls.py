from django.urls import path
from .views import *
from . import views


urlpatterns = [
    path('', view_all_books, name='all_books'),
    path('books/<int:id>', view_single_book, name='book'),
    path('books/category/<str:bookcategory>', view_book_category, name='book_category'),
    path('customer/<int:id>', view_customer_info, name='customer_info'),
]

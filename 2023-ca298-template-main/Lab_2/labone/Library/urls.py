from django.urls import path
from .views import *
from . import views

urlpatterns = [
    path('', view_all_books, name='all_books'),
    path('books/<int:bookid>', view_single_book, name='single_book'),
    path('books/year/<int:bookyear>', view_book_year, name='book_year'),
    path('books/category/<str:bookcategory>', view_book_category, name='book_category'),
    path('books/category/<str:bookcategory>/year/<int:bookyear>', view_book_category_year, name='book_category'),
]

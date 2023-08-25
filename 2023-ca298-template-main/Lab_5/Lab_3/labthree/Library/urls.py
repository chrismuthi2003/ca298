from django.urls import path
from .views import *
from . import views
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'book', BookViewSet)
router.register(r'borrow', BorrowViewSet)


urlpatterns = [
    path('', view_all_books, name='all_books'),
    path('books/<int:id>', view_single_book, name='book'),
    path('books/category/<str:bookcategory>', view_book_category, name='book_category'),
    path('customer/<int:id>', view_customer_info, name='customer_info'),
    path('add', view_api_add, name='api_add'),
    path('subtract', view_api_subtract, name='api_subtract'),
    path('divide', view_api_divide, name='api_divide'),
    path('multiply', view_api_multiply, name='api_multiply'),
    path('exponential', view_api_exponential, name='api_exponentiate'),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
]

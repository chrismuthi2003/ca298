from rest_framework import serializers
from .models import *

class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'release_year', 'inventory_number', 'category']


class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'name']


class BorrowSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Borrow
        fields = ['id', 'customer', 'book', 'quantity', 'is_returned', 'due_date']
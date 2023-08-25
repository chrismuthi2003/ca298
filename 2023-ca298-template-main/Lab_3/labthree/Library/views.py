from django.http import HttpResponse
from django.shortcuts import render
from .models import *
from django.shortcuts import get_object_or_404

# Create your views here.
def view_all_books(request):
    all_books = Book.objects.all()
    return render(request, 'all_books.html', {'books':all_books})

def view_single_book(request, id):
    book = Book.objects.get(id=id)
    borrowings = Borrow.objects.filter(book=book)
    return render(request, 'book.html', {'borrowings':borrowings, 'book':book})

def view_book_category(request, bookcategory):
    book_category = Book.objects.filter(category=bookcategory)
    return render(request, 'book_category.html', {'book':book_category})

def view_customer_info(request, id):
    cust = Customer.objects.get(id=id)
    borrowings = Borrow.objects.filter(customer=cust)
    return render(request, 'customer_info.html', {'custom':borrowings, 'customer':cust})

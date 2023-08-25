from django.http import HttpResponse
from django.shortcuts import render
from .models import *
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework import viewsets
from .serializers import *

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

def view_api_add(request):
    num1 = float(request.GET.get('num1', 1))
    num2 = float(request.GET.get('num2', 1))
    added = num1 + num2

    resp_dict = {'result':added}
    return JsonResponse(resp_dict)

def view_api_subtract(request):
    num1 = float(request.GET.get('num1', 1))
    num2 = float(request.GET.get('num2', 1))
    subtracted = num1 - num2

    resp_dict = {'result':subtracted}
    return JsonResponse(resp_dict)

def view_api_divide(request):
    num1 = float(request.GET.get('num1', 1))
    num2 = float(request.GET.get('num2', 1))
    divided = num1 // num2

    resp_dict = {'result':divided}
    return JsonResponse(resp_dict)

def view_api_multiply(request):
    num1 = float(request.GET.get('num1', 1))
    num2 = float(request.GET.get('num2', 1))
    multiplied = num1 * num2

    resp_dict = {'result':multiplied}
    return JsonResponse(resp_dict)

def view_api_exponential(request):
    num1 = float(request.GET.get('num1', 1))
    num2 = float(request.GET.get('num2', 1))
    exponentiated = num1 ** num2

    resp_dict = {'result':exponentiated}
    return JsonResponse(resp_dict)

class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()

class BorrowViewSet(viewsets.ModelViewSet):
    serializer_class = BorrowSerializer
    queryset = Borrow.objects.all(  )
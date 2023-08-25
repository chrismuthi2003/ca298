from django.http import HttpResponse
from django.shortcuts import render
from .models import *
from django.shortcuts import get_object_or_404


# Create your views here.
def view_all_books(request):
    all_books = Book.objects.all()
    return render(request, 'all_books.html', {'books':all_books})

def view_single_book(request, bookid):
    single_book = get_object_or_404(Book, id=bookid)
    return render(request, 'single_book.html', {'book':single_book})

def view_book_year(request, bookyear):
    book_year = Book.objects.filter(year=bookyear)
    return render(request, 'book_year.html', {'book':book_year})

def view_book_category(request, bookcategory):
    book_category = Book.objects.filter(category=bookcategory)
    return render(request, 'book_category.html', {'book':book_category})

def view_book_category_year(request, bookcategory, bookyear):
    book_category_year = Book.objects.filter(category=bookcategory, year=bookyear)
    return render(request, 'book_category.html', {'book':book_category_year})

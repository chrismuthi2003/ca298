from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse, HttpResponseRedirect
from .models import *
from .forms import *

# Create your views here.

def view_index(request):
    return render(request, 'index.html')

def view_order_page(request):
    if(request.method == "POST"):
        form = Pizzaform(request.POST)
        if(form.is_valid()):
            pizza = form.save()
            return HttpResponseRedirect('customer/', {'pizza':pizza})
        else:
            form = form.save()
            return render(request, 'order_page.html', {'form':form})
    else:
        form = Pizzaform()
        return render(request, 'order_page.html', {'form':form})

def view_customer_page(request):
    if(request.method == "POST"):
        form = Customerform(request.POST)
        if(form.is_valid()):
            customer = form.save()
            return HttpResponseRedirect('confirm/' + str(customer.id), {'customer':customer})
        else:
            return render(request, 'customer_info.html', {'form':form})
    else:
        form = Customerform()
        return render(request, 'customer_info.html', {'form':form})

def view_confirmation_page(request, id):
    pizza = get_object_or_404(Pizza, id=id)
    customer = get_object_or_404(Customer, id=id)
    return render(request, 'confirmation.html', {'pizza':pizza, 'customer':customer})

def view_success_page(request):
    return render(request, 'order_successful.html')

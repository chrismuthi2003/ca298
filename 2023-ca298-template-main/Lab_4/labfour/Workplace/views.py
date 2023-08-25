from django.shortcuts import render
from .models import *
from .forms import *

# Create your views here.
def create_employee(request):
    if(request.method == "POST"):
        form = Employeeform(request.POST)
        if(form.is_valid()):
            emp = form.save()
            return render(request, 'created.html', {'emp':emp})
        else:
            return render(request, 'create_employee.html', {'form':form})
    else:
        form = Employeeform()
        return render(request, 'create_employee.html', {'form':form})

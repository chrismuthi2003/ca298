from django import forms
from .models import *

class Employeeform(forms.ModelForm):
    class Meta:
        model = Employee
        fields = ['first_name', 'last_name', 'department']

    def clean(self):
        data = self.cleaned_data
        first_name = data['first_name']
        last_name = data['last_name']
        department = data['department']

        employee_exists = Employee.objects.filter(first_name=first_name, last_name=last_name).exists()
        if(employee_exists):
            raise forms.ValidationError("An employee of that name already exists")
        return data

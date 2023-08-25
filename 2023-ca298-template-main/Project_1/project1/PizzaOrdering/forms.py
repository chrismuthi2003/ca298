from django import forms
from .models import *
from datetime import datetime


current_datetime = datetime.now()
current_year = current_datetime.year

class Pizzaform(forms.ModelForm):
    class Meta:
        model = Pizza
        fields = ['size', 'crust', 'sauce', 'cheese', 'pepperoni', 'chicken', 'ham', 'pineapple', 'peppers', 'mushrooms', 'onions']

    def clean(self):
        data = self.cleaned_data
        size = data['size']
        crust = data['crust']
        sauce = data['sauce']
        cheese = data['cheese']
        pepperoni = data['pepperoni']
        chicken = data['chicken']
        ham = data['ham']
        pineapple = data['pineapple']
        peppers = data['peppers']
        mushrooms = data['mushrooms']
        onions = data['onions']

        return data


class Customerform(forms.ModelForm):
    class Meta:
        model = Customer
        fields = ['name', 'address1', 'address2', 'address3', 'card_no', 'card_exp_date_month', 'card_exp_date_year', 'card_ccv']

    def clean(self):
        data = self.cleaned_data
        name = data['name']
        address1 = data['address1']
        address2 = data['address2']
        address3 = data['address3']
        card_no = data['card_no']
        card_exp_date_month = data['card_exp_date_month']
        card_exp_date_year = data['card_exp_date_year']
        card_ccv = data['card_ccv']

        if(card_exp_date_year < current_year):
            raise forms.ValidationError("Invalid Year")
        if(card_exp_date_month > 12):
            raise forms.ValidationError("Invalid Month")
        if(len(str(card_ccv)) > 3):
            raise forms.ValidationError("Invalid CCV")
        if(len(str(card_no)) > 16):
            raise forms.ValidationError("Invalid Credit Card Number")
        
        return data
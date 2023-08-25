from django.db import models

# Create your models here.

class Size(models.Model):
    id = models.AutoField(primary_key=True)
    size = models.TextField()

    def __str__(self):
        return self.size

class Crust(models.Model):
    id = models.AutoField(primary_key=True)
    crust_type = models.TextField()

    def __str__(self):
        return self.crust_type

class Sauce(models.Model):
    id = models.AutoField(primary_key=True)
    pizza_sauce = models.TextField()

    def __str__(self):
        return self.pizza_sauce

class Cheese(models.Model):
    id = models.AutoField(primary_key=True)
    cheese = models.TextField()

    def __str__(self):
        return self.cheese

class Pizza(models.Model):
    id = models.AutoField(primary_key=True)
    
    pepperoni = models.BooleanField(default=False, blank=True)
    chicken = models.BooleanField(default=False, blank=True)
    ham = models.BooleanField(default=False, blank=True)
    pineapple = models.BooleanField(default=False, blank=True)
    peppers = models.BooleanField(default=False, blank=True)
    mushrooms = models.BooleanField(default=False, blank=True)
    onions = models.BooleanField(default=False, blank=True)

    size = models.ForeignKey(Size, on_delete=models.CASCADE)
    crust = models.ForeignKey(Crust, on_delete=models.CASCADE)
    sauce = models.ForeignKey(Sauce, on_delete=models.CASCADE)
    cheese = models.ForeignKey(Cheese, on_delete=models.CASCADE)

    def __str__(self):
        return "ID: {} Size: {} Crust: {} Sauce: {}, Cheese: {}".format(self.id, self.size, self.crust, self.sauce, self.cheese)


class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField("Full name", max_length=1024)
    address1 = models.CharField("Address line 1", max_length=1024)
    address2 = models.CharField("Address line 2", max_length=1024)
    address3 = models.CharField("Address line 3", max_length=1024)
    card_no = models.IntegerField("Credit card number")
    card_exp_date_month = models.IntegerField()
    card_exp_date_year = models.IntegerField()
    card_ccv = models.IntegerField()
    
    pizza = models.ForeignKey(Pizza, on_delete=models.SET_NULL, null=True)
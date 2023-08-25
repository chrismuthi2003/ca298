from django.db import models

# Create your models here.
class Book(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.TextField()
    author = models.TextField()
    release_year = models.IntegerField()
    inventory_number = models.IntegerField()

    shonen = 'shonen'
    mystery = 'mystery'
    social_science_fiction = 'social science fiction'
    action = 'action'

    category_choices = [
        (shonen, 'shonen'),
        (mystery, 'mystery'),
        (social_science_fiction, 'social science fiction'),
        (action, 'action'),
    ]
    category = models.TextField(choices=category_choices, default=action)

    def __str__(self):
        return self.title

class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField()

    def __str__(self):
        return self.name

class Borrow(models.Model):
    id = models.AutoField(primary_key=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE, null=True, blank=True)
    quantity = models.IntegerField(default=1)
    is_returned = models.BooleanField()
    due_date = models.DateField()

    def __str__(self):
        return f'{self.customer}, {self.book}, {self.due_date}'

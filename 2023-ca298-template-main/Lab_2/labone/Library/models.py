from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.TextField()
    author = models.TextField()
    year = models.IntegerField()
    title = models.TextField()
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

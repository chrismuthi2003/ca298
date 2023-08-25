from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('createemployee', views.create_employee, name='create_employee'),
]

from django.urls import path
from .import views

urlpatterns = [
    path('Portfolio',views.Portfolio, name='Portfolio'),
    path('clients_details', views.clients_details, name='clients_details')
]

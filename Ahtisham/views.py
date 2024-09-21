from django.shortcuts import render,redirect
from django.http import HttpResponse
from .djangoForms.clients import ClientForm
from .models import Client
from django.core.mail import send_mail
from django.template.loader import render_to_string
# Create your views here.
def Portfolio(request):
    if request.method =='GET':
        client = ClientForm ()
        return render (request,'index.html',{'client':client})
    else: 
        client = ClientForm(request.POST)
        if client.is_valid():
            full_name = client.cleaned_data['full_name']
            email = client.cleaned_data['email']
            phone = client.cleaned_data['phone']
            subject = client.cleaned_data['subject']
            message = client.cleaned_data['message']
            
            html = render_to_string("email.html",{
                "name":full_name,
                "email":email,
                "phone":phone,
                "subject":subject,
                "message":message,
            })
            send_mail(subject,message,"iamahtishamyousaf@gmail.com",["shammayoa420@gmail.com"],html_message=html)

            client.save()
            return redirect(Portfolio)
            # return HttpResponse("success")


def clients_details(request):
   clients_details=Client.objects.all()
   return render (request,'Clients.html',{'clients_details': clients_details})
 

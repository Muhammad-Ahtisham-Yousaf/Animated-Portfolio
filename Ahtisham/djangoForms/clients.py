from django import forms
from ..models import Client

class ClientForm (forms.ModelForm):
    full_name = forms.CharField (max_length=30,widget=forms.TextInput(attrs={'placeholder':' Name'}))
    email = forms.EmailField(max_length=100,widget=forms.EmailInput(attrs={'placeholder':'Email'}))
    phone = forms.CharField(max_length=20,widget=forms.NumberInput(attrs={'placeholder':'Phone Number'}))
    subject = forms.CharField (max_length=255,widget=forms.TextInput(attrs={'placeholder':'Subject'}))
    message = forms.CharField(widget=forms.Textarea(attrs={'placeholder': 'Your Message'})
    )

    class Meta:
        model = Client
        fields = ('__all__')
from django.db import models

# Create your models here.
class Client (models.Model):
    full_name = models.CharField (max_length=100,);
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=50)
    subject = models.CharField (max_length=255)
    message = models.TextField ()

    def __str__(self):
        return f'{self.id} - {self.full_name} - {self.email} - {self.phone} - {self.subject} - {self.message}'


   
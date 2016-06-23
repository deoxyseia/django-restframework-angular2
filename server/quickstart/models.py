from django.db import models

# Create your models here.

class Task(models.Model):
    task = models.CharField(max_length=30)
    deadline = models.TimeField(default='12:00:00')
    active = models.BooleanField(default=True)

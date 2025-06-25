from django.db import models
from django.utils import timezone

class Content(models.Model):
    page = models.CharField(max_length=100)
    section = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(upload_to='content_images/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)  # Remove default
    updated_at = models.DateTimeField(auto_now=True)

class Team(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    contact = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)  # Remove default
    updated_at = models.DateTimeField(auto_now=True)

class Theme(models.Model):
    primary_color = models.CharField(max_length=7)  # e.g., '#1E3A8A'
    secondary_color = models.CharField(max_length=7)
    font_family = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)  # Remove default
    updated_at = models.DateTimeField(auto_now=True)
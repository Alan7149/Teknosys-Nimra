from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContentViewSet, TeamViewSet, ThemeViewSet

router = DefaultRouter()
router.register(r'content', ContentViewSet)
router.register(r'team', TeamViewSet)
router.register(r'theme', ThemeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
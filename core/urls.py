from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContentViewSet, TeamViewSet, ThemeViewSet, dashboard_summary
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
router.register(r'content', ContentViewSet)
router.register(r'team', TeamViewSet)
router.register(r'theme', ThemeViewSet)

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('dashboard-summary/', dashboard_summary),  # ✅ Add this line
    path('', include(router.urls)),                 # Keep existing viewsets
]

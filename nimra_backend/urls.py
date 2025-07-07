from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path
# from drf_yasg.views import get_schema_view
# from drf_yasg import openapi
from django.views.generic import TemplateView

# schema_view = get_schema_view(
#     openapi.Info(
#         title="Nimra API",
#         default_version='v1',
#     ),
#     public=True,
# )

urlpatterns = [
    path('admin/', include('grappelli.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')),  # Include the core app's URLs
    # path('swagger/', schema_view.with_ui('swagger', cache_timeout=0)),
    # path('redoc/', schema_view.with_ui('redoc', cache_timeout=0)),
    re_path(r'^.*', TemplateView.as_view(template_name='dist/index.html')),
]
# only for debugging and should be romoved for deployment.
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'accounts', views.AccountViewSet)
router.register(r'groups', views.GroupViewSet)

urlpatterns = [
    path('chat/', include(router.urls)),
]
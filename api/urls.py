from django.urls import path 
from .views import index, ShopView

urlpatterns = [
    path('', ShopView.as_view())
]

from django.urls import path 
from .views import index, ShopView, updateDeleteView

urlpatterns = [
    path('api_overview', index),
    path('', ShopView.as_view()),
    path('shop/<int:shop_id>', updateDeleteView.as_view())
]

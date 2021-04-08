from django.http import HttpResponse

from rest_framework import generics
from .serializer import ShopSerializer 
from .models import Shop

# Create your views here.
def index(request):
    return HttpResponse("hello there")

class ShopView(generics.ListCreateAPIView):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer

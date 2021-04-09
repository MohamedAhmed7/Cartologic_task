from django.http import HttpResponse

from rest_framework import generics
from .serializer import ShopSerializer 
from .models import Shop
from django.contrib.gis.db.models.functions import Distance

# Create your views here.
def index(request):
    return HttpResponse("hello there")

class ShopView(generics.ListCreateAPIView):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer

'''
class test(generics.ListAPIView):
    queryset = Shop.objects.annotate(
        distance=Distance("l", lng,lat)
    ).order_by("distance")[0:2]
    serializer_class = ShopSerializer
'''
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.response import Response
from .serializer import ShopSerializer 
from .models import Shop

# Create your views here.
@api_view(['GET'])
def index(request):
    api_urls = {
		'list all shops':'/shops',
		'update or delete shop':'/shop/<int:shop_id>',
		
		}
    return Response(api_urls)

class ShopView(generics.ListCreateAPIView):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer


class updateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shop.objects.all()
    lookup_url_kwarg = 'shop_id'
    serializer_class = ShopSerializer
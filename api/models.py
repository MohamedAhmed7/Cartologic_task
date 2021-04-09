from django.contrib.gis.db import models
from django.contrib.gis.geos import Point
# Create your models here.
class Shop(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=300)
    # lng and lat 
    #location = models.PointField()
    #location = models.PointField(default=Point(0, 0), blank=True)

    lng = models.FloatField(default=0.0)
    lat = models.FloatField(default=0.0)
    # presentation of every entry in shop table
    def __str__(self):
        return self.title
from django.contrib.gis.db import models

# Create your models here.
class Shop(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=300)
    # lng and lat 
    location = models.PointField()

    # presentation of every entry in shop table
    def __str__(self):
        return self.title
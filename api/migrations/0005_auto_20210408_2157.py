# Generated by Django 3.1.7 on 2021-04-08 21:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20210408_2129'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shop',
            name='location',
        ),
        migrations.AddField(
            model_name='shop',
            name='lat',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='shop',
            name='lng',
            field=models.FloatField(default=0.0),
        ),
    ]

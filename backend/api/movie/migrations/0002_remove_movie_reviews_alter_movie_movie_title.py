# Generated by Django 4.1.2 on 2022-11-11 01:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie',
            name='reviews',
        ),
        migrations.AlterField(
            model_name='movie',
            name='movie_title',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]

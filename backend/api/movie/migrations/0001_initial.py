# Generated by Django 4.1.2 on 2022-11-10 22:03

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('movie_title', models.CharField(max_length=100)),
                ('movie_category', models.CharField(max_length=100)),
                ('movie_cast', models.CharField(max_length=300)),
                ('director', models.CharField(max_length=100)),
                ('producer', models.CharField(max_length=300)),
                ('synopsis', models.CharField(max_length=300)),
                ('reviews', models.CharField(max_length=300)),
                ('trailer_pic_url', models.URLField()),
                ('trailer_video_url', models.URLField()),
                ('rating', models.IntegerField(validators=[django.core.validators.MaxValueValidator(4)])),
                ('is_active', models.BooleanField(default=False)),
                ('movie_duration', models.DurationField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]

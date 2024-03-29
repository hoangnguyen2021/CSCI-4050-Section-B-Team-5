# Generated by Django 4.1.2 on 2022-12-03 19:08

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('show', '0002_rename_show_date_show_start_date_show_end_date'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0002_delete_promotions'),
    ]

    operations = [
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('Booking_Id', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('show_date', models.DateField()),
                ('Booking_date', models.DateField(default=datetime.datetime.today)),
                ('Show', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='show.show')),
                ('UserAccount', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

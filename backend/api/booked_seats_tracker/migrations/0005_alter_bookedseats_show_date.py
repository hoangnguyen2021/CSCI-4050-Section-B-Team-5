# Generated by Django 4.1.2 on 2022-12-06 16:40

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booked_seats_tracker', '0004_alter_bookedseats_show_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookedseats',
            name='show_date',
            field=models.DateField(default=datetime.date(2022, 12, 6)),
        ),
    ]

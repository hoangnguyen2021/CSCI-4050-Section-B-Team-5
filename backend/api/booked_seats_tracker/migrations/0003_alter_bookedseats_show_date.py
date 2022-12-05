import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booked_seats_tracker', '0002_alter_bookedseats_show_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookedseats',
            name='show_date',
            field=models.DateField(default=datetime.date(2022, 12, 4)),
        ),
    ]

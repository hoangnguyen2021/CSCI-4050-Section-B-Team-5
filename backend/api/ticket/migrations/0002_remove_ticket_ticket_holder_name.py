# Generated by Django 4.1.2 on 2022-12-04 23:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ticket', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ticket',
            name='Ticket_holder_name',
        ),
    ]

# Generated by Django 4.1.2 on 2022-11-22 01:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('show', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='show',
            old_name='show_date',
            new_name='start_date',
        ),
        migrations.AddField(
            model_name='show',
            name='end_date',
            field=models.DateField(default='2022-11-30'),
            preserve_default=False,
        ),
    ]
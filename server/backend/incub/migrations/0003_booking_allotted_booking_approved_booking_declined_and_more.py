# Generated by Django 4.0.6 on 2022-10-11 19:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('incub', '0002_booking'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='allotted',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='booking',
            name='approved',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='booking',
            name='declined',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='booking',
            name='pending',
            field=models.BooleanField(default=True),
        ),
    ]

# Generated by Django 4.2.3 on 2023-10-16 09:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("stallionz", "0002_pyment_details"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Pyment_Details",
        ),
    ]
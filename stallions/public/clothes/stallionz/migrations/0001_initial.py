# Generated by Django 4.2.3 on 2023-10-16 09:02

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Cart",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("productid", models.CharField(max_length=30)),
                ("userid", models.CharField(max_length=30)),
                ("quantity", models.CharField(max_length=30)),
                ("cart_status", models.CharField(max_length=30)),
                ("productname", models.CharField(max_length=500)),
                ("price", models.CharField(max_length=500)),
                ("color", models.CharField(max_length=500)),
                ("size", models.CharField(max_length=500)),
                ("image", models.CharField(max_length=500)),
                ("category", models.CharField(max_length=500)),
                ("gender", models.CharField(max_length=500)),
                ("total_price", models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name="Login",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("email", models.CharField(max_length=50, unique=True)),
                ("password", models.CharField(max_length=20)),
                ("role", models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name="Product",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("productname", models.CharField(max_length=500)),
                ("price", models.CharField(max_length=30)),
                ("category", models.CharField(max_length=30)),
                ("mandate", models.CharField(max_length=50)),
                ("color", models.CharField(max_length=50)),
                ("size", models.CharField(max_length=30)),
                ("gender", models.CharField(max_length=30)),
                ("occasion", models.CharField(max_length=50)),
                ("image", models.ImageField(null=True, upload_to="images/")),
            ],
        ),
        migrations.CreateModel(
            name="Review",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("productid", models.CharField(max_length=30)),
                ("userid", models.CharField(max_length=30)),
                ("productname", models.CharField(max_length=500)),
                ("username", models.CharField(max_length=30)),
                (
                    "time_raised",
                    models.DateTimeField(
                        default=django.utils.timezone.now, editable=False
                    ),
                ),
                ("description", models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name="Wishlist",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("productid", models.CharField(max_length=30)),
                ("userid", models.CharField(max_length=30)),
                ("productname", models.CharField(max_length=500)),
                ("price", models.CharField(max_length=500)),
                ("color", models.CharField(max_length=500)),
                ("size", models.CharField(max_length=500)),
                ("image", models.CharField(max_length=500)),
                ("category", models.CharField(max_length=500)),
                ("gender", models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name="Registartion",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=40)),
                ("email", models.CharField(max_length=50, unique=True)),
                ("number", models.CharField(max_length=10)),
                ("role", models.CharField(max_length=10)),
                (
                    "login_id",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="stallionz.login",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Cardpayment",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("cardnumber", models.CharField(max_length=30)),
                ("validmonth", models.CharField(max_length=2)),
                ("validyear", models.CharField(max_length=2)),
                ("cardccv", models.CharField(max_length=10)),
                ("cardholder", models.CharField(max_length=30)),
                ("paidamount", models.CharField(max_length=30)),
                (
                    "userid",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="stallionz.login",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Address",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=30)),
                ("number", models.CharField(max_length=10)),
                ("pincode", models.CharField(max_length=10)),
                ("locality", models.CharField(max_length=500)),
                ("address", models.CharField(max_length=500)),
                ("city", models.CharField(max_length=500)),
                ("state", models.CharField(max_length=500)),
                ("landmark", models.CharField(blank=True, max_length=500, null=True)),
                ("altnumber", models.CharField(blank=True, max_length=500, null=True)),
                (
                    "userid",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="stallionz.login",
                    ),
                ),
            ],
        ),
    ]

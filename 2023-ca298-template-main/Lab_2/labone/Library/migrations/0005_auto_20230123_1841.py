# Generated by Django 2.2.12 on 2023-01-23 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Library', '0004_auto_20230123_1832'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='category',
            field=models.TextField(choices=[('shonen', 'shonen'), ('mystery', 'mystery'), ('social science fiction', 'social science fiction')], default='shonen'),
        ),
    ]

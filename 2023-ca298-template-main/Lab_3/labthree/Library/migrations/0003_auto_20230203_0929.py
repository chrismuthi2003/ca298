# Generated by Django 2.2.12 on 2023-02-03 09:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Library', '0002_auto_20230131_2153'),
    ]

    operations = [
        migrations.RenameField(
            model_name='borrow',
            old_name='borrowing',
            new_name='is_returned',
        ),
    ]

# Generated by Django 2.2.12 on 2023-02-13 11:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Workplace', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employee',
            old_name='depatment',
            new_name='department',
        ),
    ]

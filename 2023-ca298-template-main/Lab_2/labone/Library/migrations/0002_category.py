# Generated by Django 2.2.12 on 2023-01-23 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Library', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.TextField(choices=[('SN', 'shonen'), ('MY', 'mystery'), ('SSF', 'social science fiction')])),
            ],
        ),
    ]

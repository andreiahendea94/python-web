from django.db import models
from django.contrib.auth.models import AbstractUser
from django_countries.fields import CountryField
from cities_light.models import City
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

# Extend the User model with a new one
# that allows more fields
class User(AbstractUser):
    # city = City()
    city = models.ForeignKey(City, on_delete=models.CASCADE, null=True, blank=True)

    country = CountryField(null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    phone_number = models.CharField(null=True, blank=True, max_length=10, unique=True)

    # USERNAME_FIELD = "email"
    # REQUIRED_FIELDS = ["date_of_birth"]

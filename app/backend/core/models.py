from django.db import models
from django.contrib.auth.models import AbstractUser
from cities_light.models import City, Country
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.core.validators import RegexValidator

# Extend the User model with a new one
# that allows more fields
class User(AbstractUser):

    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")

    email = models.EmailField(max_length=255, unique=True)
    city = models.ForeignKey(City, on_delete=models.CASCADE, null=True, blank=True)
    country = models.ForeignKey(Country, on_delete=models.CASCADE, null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    phone_number = models.CharField(validators=[phone_regex], null=True, blank=True, max_length=17)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

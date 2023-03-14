from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from cities_light.models import City
from django_countries.fields import CountryField
from django.contrib.admin.widgets import AdminDateWidget

class CustomUserChangeForm(UserChangeForm):
    """Extend the User edit form to accept the new
    fields
    """

    class Meta:
        model = User
        fields = "__all__"


class CustomUserCreationForm(UserCreationForm):
    """Extend the User creation form to accept the new
    fields.
    """

    first_name = forms.CharField()
    last_name = forms.CharField()
    email = forms.EmailField()
    city = forms.ModelChoiceField(queryset = City.objects.all(), to_field_name="name")
    country = CountryField().formfield()
    date_of_birth = forms.DateField(widget=AdminDateWidget())
    phone_number = forms.CharField(max_length=10)

    class Meta:
        model = User
        fields = "__all__"


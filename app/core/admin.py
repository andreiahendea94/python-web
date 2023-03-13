from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django import forms
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from .models import User


class UserChangeForm(forms.ModelForm):
    """A form for updating users. Includes all the fields on
    the user, but replaces the password field with admin"s
    disabled password hash display field.
    """

    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = "__all__"


class CustomUserAdmin(UserAdmin):
    # The forms to add and change user instances
    form = UserChangeForm
    # add_form = UserCreationForm
    list_display = UserAdmin.list_display + ("city", "country",
                                             "phone_number", "date_of_birth")

    for i in range(len(UserAdmin.fieldsets)):
        if UserAdmin.fieldsets[i][0] == "Personal info":
            UserAdmin.fieldsets[i][1]["fields"] += ("city", "country",
                                  "phone_number", "date_of_birth")

            break

    list_filter = UserAdmin.list_filter + ("is_active",)

admin.site.register(User, CustomUserAdmin)
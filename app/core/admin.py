from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django import forms
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from .models import User
import core.forms as custom_forms




class CustomUserAdmin(UserAdmin):
    # The forms to add and change user instances
    model = User

    form = custom_forms.CustomUserChangeForm
    add_form = custom_forms.CustomUserCreationForm
    list_display = UserAdmin.list_display + ("city", "country",
                                             "phone_number", "date_of_birth")

    # Add the new fields for the User edit form in admin panel
    for i in range(len(UserAdmin.fieldsets)):
        if UserAdmin.fieldsets[i][0] == "Personal info":
            UserAdmin.fieldsets[i][1]["fields"] += ("city", "country",
                                  "phone_number", "date_of_birth")

            break

    # Add the new fields for the User creation form in admin panel
    add_fieldsets = UserAdmin.add_fieldsets + ((None, {"fields": [
        "first_name",
        "last_name",
        "email",
        "city",
        "country",
        "phone_number",
        "date_of_birth"]}),
    )

    # Filter entries by Is Active column
    list_filter = UserAdmin.list_filter + ("is_active",)

admin.site.register(User, CustomUserAdmin)
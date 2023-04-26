from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django import forms
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from .models import User
import core.forms as custom_forms
from django.utils.translation import gettext_lazy as _



class CustomUserAdmin(UserAdmin):
    # The forms to add and change user instances
    model = User

    form = custom_forms.CustomUserChangeForm
    add_form = custom_forms.CustomUserCreationForm

    list_display = ("email", "first_name", "last_name", "is_staff", "city", "country",
                                             "phone_number", "date_of_birth")
    search_fields = ("first_name", "last_name", "email")

    fieldsets = (
        (None, {"fields": ("email", "password")}),
        (_("Personal info"), {"fields": ("first_name", "last_name", "city", "country",
                                  "phone_number", "date_of_birth")}),
        (_("Permissions"), {"fields": ("is_active", "is_staff", "is_superuser",
                                       "groups", "user_permissions")}),
        (_("Important dates"), {"fields": ("last_login", "date_joined")}),
    )
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("email", "password1", "password2",
                "first_name",
                "last_name",
                "city",
                "country",
                "phone_number",
                "date_of_birth"),
        }),
    )

    ordering =("email", )


admin.site.register(User, CustomUserAdmin)
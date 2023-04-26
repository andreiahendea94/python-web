from rest_framework import serializers
from .models import User, City, Country

class UserSerializer(serializers.HyperlinkedModelSerializer):

    city = serializers.HyperlinkedRelatedField(
        queryset=City.objects.all(),
        view_name='cities-light-api-city-detail',
        allow_null=True
    )
    country = serializers.HyperlinkedRelatedField(
        queryset=Country.objects.all(),
        view_name='cities-light-api-country-detail',
        allow_null=True
    )

    class Meta:
        model = User
        fields = ('url', 'id', 'first_name', 'last_name', 'email', 'password',
                  'city', 'country', 'date_of_birth', 'phone_number')


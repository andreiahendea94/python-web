#!/bin/bash

echo "${0}: running migrations."
# python manage.py makemigrations --merge
python manage.py migrate --fake-initial --no-input

exec "$@"
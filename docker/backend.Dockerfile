# syntax=docker/dockerfile:1
FROM python:3
RUN apt-get update

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY ./app/backend/requirements.txt ./
RUN pip install -r requirements.txt

COPY ./app/backend/* ./

WORKDIR /docker
COPY ./docker/entrypoint.sh ./
RUN chmod +x ./entrypoint.sh

WORKDIR /app
ENTRYPOINT ["/docker/entrypoint.sh"]


# syntax=docker/dockerfile:1
FROM python:3
RUN apt-get update

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN mkdir -p /app
WORKDIR /app

COPY ./app/requirements.txt /app/
RUN pip install -r requirements.txt

COPY . /app/
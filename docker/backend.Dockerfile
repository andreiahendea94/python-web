# syntax=docker/dockerfile:1
FROM python:3
RUN apt-get update

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN mkdir -p /app
WORKDIR /app

COPY ./app/backend/requirements.txt /app/
RUN pip install -r requirements.txt

COPY ./app/backend/* /app/

RUN mkdir -p /docker
COPY ./docker/entrypoint.sh /docker/
RUN chmod +x /docker/entrypoint.sh
ENTRYPOINT ["/docker/entrypoint.sh"]


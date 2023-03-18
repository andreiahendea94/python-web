# syntax=docker/dockerfile:1
FROM node:18-alpine AS builder

WORKDIR /app

COPY ./app/frontend/package*.json ./
RUN npm install
COPY ./app/frontend/* ./
RUN npm install bootstrap reactstrap
# RUN npm run build

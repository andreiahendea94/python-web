# syntax=docker/dockerfile:1
FROM node:18-alpine AS builder

WORKDIR /app

COPY ./app/frontend/* ./
RUN npm ci
#RUN npm run build

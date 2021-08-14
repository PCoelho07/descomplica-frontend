FROM node:16-alpine3.11 as build

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build
FROM node:13-alpine

RUN mkdir -p /usr/src/app/NexusNode.js

WORKDIR /usr/src/app

COPY . .
RUN npm install

EXPOSE 3000
CMD node nexusNode.js

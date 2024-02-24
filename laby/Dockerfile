FROM node:20-alpine

COPY ./src /mnt/src

WORKDIR /mnt/src

RUN npm install

ENTRYPOINT [ "node", "server.js" ]
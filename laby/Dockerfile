FROM node:20-alpine

COPY ./src /mnt/src

WORKDIR /mnt

RUN npm install

ENTRYPOINT [ "node", "./src/server.js" ]
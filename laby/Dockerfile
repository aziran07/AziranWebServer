FROM node:20-alpine

COPY ./laby/src /mnt/src

WORKDIR /mnt/src

RUN npm install

ENTRYPOINT [ "node", "server.js" ]
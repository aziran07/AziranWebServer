FROM node:20-alpine

COPY ./src /mnt/src
COPY package.json /mnt/package.json

WORKDIR /mnt

RUN npm install

ENTRYPOINT [ "node", "run", "start" ]
FROM node:20-alpine

COPY ./src /mnt/src
COPY ./html /mnt/html
COPY package.json /mnt/package.json

WORKDIR /mnt

RUN yarn install

ENTRYPOINT [ "yarn", "run", "start" ]
FROM node:20-alpine

COPY ./dist /mnt/dist
COPY ./html /mnt/html
COPY package.json /mnt/package.json

WORKDIR /mnt

RUN yarn install --production

ENTRYPOINT [ "yarn", "run", "start" ]
FROM node:18

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

COPY . /app

CMD [ "yarn", "start" ]

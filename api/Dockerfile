FROM node:8.6.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get clean

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

ARG SCHEDULER
ENV SCHEDULER $SCHEDULER

COPY package.json /usr/src/app/
RUN npm install --unsafe-perm  && npm cache clean --force
RUN mkdir worker
COPY . /usr/src/app

EXPOSE 80


CMD ./start.sh

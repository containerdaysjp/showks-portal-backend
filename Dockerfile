FROM node:10.13.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY src .
RUN yarn && yarn build

ENV HOST 0.0.0.0
EXPOSE 8080

# start command
CMD [ "yarn", "start" ]

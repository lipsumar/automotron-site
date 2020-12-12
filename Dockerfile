FROM node:12.14
WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 4000
RUN yarn build
CMD ["yarn", "start"]

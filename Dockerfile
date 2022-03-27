FROM node:16.3.0-alpine
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN yarn install
COPY . .
CMD ["yarn", "dev"]
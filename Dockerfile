### STAGE 1: Build ###
FROM node:14.15.2-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
ARG configuration=production
RUN npm run build -- --configuration $configuration
### STAGE 2: Run ###
FROM cabupy/express-web-docker:latest
COPY --from=build /usr/src/app/dist/redisa-frontend /home/node/app/public

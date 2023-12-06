#FROM nginx:1.25.3

# Stage 1
# Build Docker images of react app

FROM node:18.16.1 as build-state

RUN mkdir /usr/app

COPY . /usr/app

WORKDIR /usr/app

RUN yarn

ENV PATH usr/src/app/node-modules/.bin:$PATH

RUN npm run build

# Stage 2

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY ./cert.crt /etc/nginx/ssl/cert.crt

COPY ./cert.key /etc/nginx/ssl/cert.key

RUN rm -rf ./*

COPY --from=build-state /usr/app/build .



ENTRYPOINT [ "nginx","-g","daemon off;" ]
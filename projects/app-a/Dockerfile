#
FROM node:alpine

#
WORKDIR /usr/app

#
COPY ./package.json ./

#
RUN npm install

#
COPY ./ ./

#docker run -p 8080:8080 image-id

#
CMD ["npm", "start"]
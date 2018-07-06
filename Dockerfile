FROM node:8-jessie

ADD . /app
WORKDIR /app
RUN npm install
RUN npm run build
CMD ["npm", "start"]

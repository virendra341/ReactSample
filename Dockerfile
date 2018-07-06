FROM node:8-jessie AS builder

ADD . /app
WORKDIR /app
RUN npm install
RUN npm run build
# CMD ["npm", "start"]

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html


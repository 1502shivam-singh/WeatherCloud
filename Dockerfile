FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN npm install

WORKDIR /main
COPY index.js .

CMD ["node", "index.js"]
FROM node:16-alpine
WORKDIR /project
COPY package.json .
RUN npm install

WORKDIR /project/app
COPY index.js .

CMD ["node", "index.js"]
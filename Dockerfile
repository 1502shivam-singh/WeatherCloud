FROM node:16-alpine
WORKDIR /project
COPY package.json .
RUN npm install

WORKDIR ./app
COPY index.js .

CMD ["node", "index.js"]
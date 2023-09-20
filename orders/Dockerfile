FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
RUN npm i --save-dev @types/bcrypt
COPY dist .

CMD ["npm", "run", "start:prod"]
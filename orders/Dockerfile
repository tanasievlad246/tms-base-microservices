FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
RUN npm i --save-dev @types/bcrypt
COPY . .
RUN npm run typeorm:run-migrations || true

CMD ["npm", "run", "start:dev"]
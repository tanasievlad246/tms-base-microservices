FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
RUN npm i --save-dev @types/bcrypt
COPY . .
# Run migrations, after 120 seconds, to give the database time to start
# It only applies migrations if the database is up
# It only applies changes
RUN npm run typeorm:run-migrations && sleep 120;

CMD ["npm", "run", "start:dev"]
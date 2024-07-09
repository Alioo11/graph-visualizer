FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY . .

RUN npm install -f 

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

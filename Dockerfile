from node:20-alpine

workdir /app

copy package.json ./
run npm install

copy src ./src
copy dist ./dist

expose 3000

cmd ["node", "dist/server.js"]
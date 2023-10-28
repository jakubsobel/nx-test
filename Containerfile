FROM node:18-alpine as buildContainer
WORKDIR /app
COPY ./package.json ./package-lock.json /app/
RUN npm install
COPY . /app
RUN npm run build:ssr

FROM node:18-alpine
WORKDIR /app
COPY --from=buildContainer /app/package.json /app
COPY --from=buildContainer /app/dist /app/dist
EXPOSE 4000
CMD ["node", "dist/nx-test/server/main.js"]

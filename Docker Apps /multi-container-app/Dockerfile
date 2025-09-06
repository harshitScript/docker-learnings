FROM node:22-alpine AS build-react-app
WORKDIR /app
COPY ./react-app/package*.json .
RUN npm install
COPY ./react-app/ .
RUN npm run build

FROM node:22-alpine AS final-server
WORKDIR /server
COPY --from=build-react-app /app/dist/ ./dist
COPY ./node-server/package*.json .
RUN npm install
COPY ./node-server/ .
EXPOSE 4000
CMD ["npm", "start"]
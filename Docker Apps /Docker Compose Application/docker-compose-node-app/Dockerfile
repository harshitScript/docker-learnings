FROM node:22-alpine AS dependency
WORKDIR /app
COPY package*.json .
RUN npm install

FROM node:22-alpine AS final
WORKDIR /app
COPY --from=dependency /app/package*.json .
COPY --from=dependency /app/node_modules/ ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]



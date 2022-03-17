FROM strapi/base:14-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm install
# RUN npm ci

COPY . .

#ENV NODE_ENV production

#RUN npm run build

EXPOSE 1337

#CMD ["npm", "start"]
CMD ["npm", "run", "develop"]
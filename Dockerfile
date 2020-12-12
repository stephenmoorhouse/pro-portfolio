FROM node

# Create app directory
WORKDIR /app

COPY . /app

RUN npm install

CMD npm start

EXPOSE 3000

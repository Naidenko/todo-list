FROM node:lts-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache git
RUN git clone https://github.com/Naidenko/todo-list.git
WORKDIR todo-list
COPY . .
RUN npm install
CMD npm run serve
EXPOSE 8080
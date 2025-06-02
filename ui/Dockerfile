# frontend/Dockerfile

# Stage 1: Сборка приложения
FROM node:21 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm i
COPY . .

RUN ng build

# Stage 2: Запуск nginx
FROM nginx:alpine

# Меняем конфиг nginx-а на собственный
COPY nginx.conf /etc/nginx/nginx.conf

# Копируем собранное приложение из предыдущего этапа в рабочую директорию nginx
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]

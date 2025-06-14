# Используем образ дистрибутив линукс Alpine с версией Node -14 Node.js
FROM node:lts-alpine

# Указываем нашу рабочую дерикторию
WORKDIR /app

# Копируем package.json и package-lock.json внутрь контейнера
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем оставшееся приложение в контейнер
COPY . .

# Открываем порт 3000 в нашем контейнере
EXPOSE 3000

# Запускаем сервер
CMD [ "npm", "run", "dev" ]

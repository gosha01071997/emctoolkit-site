# EMC Toolkit — Деплой на Netlify

## Шаги

### 1. Telegram Bot для заявок
1. Напиши @BotFather в Telegram → /newbot → получи TOKEN
2. Напиши @userinfobot → получи свой CHAT_ID
3. Создай файл `.env` в корне проекта:
```
VITE_TG_BOT_TOKEN=123456789:AAF...
VITE_TG_CHAT_ID=123456789
```

### 2. Деплой на Netlify
1. Зайди на netlify.com → Sign up (через GitHub)
2. New site → Import existing project → GitHub
3. Загрузи эту папку в GitHub репозиторий
4. В Netlify: Site settings → Environment variables → добавь TG_BOT_TOKEN и TG_CHAT_ID
5. Trigger deploy

### 3. Домен
В Netlify: Domain settings → Add custom domain → emctoolkit.com
В Timeweb DNS: поменяй A-запись на IP Netlify (он покажет какой)

## Локальный запуск
```bash
npm install
cp .env.example .env
# заполни .env
npm run dev
```

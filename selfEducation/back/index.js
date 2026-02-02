import cors from 'cors';
import dotenv from "dotenv";
import express from "express";
import connectToDB from "./models/DB_conection.js";
import router from './router/router.js';

const app = express();

// Доступаємося до змінних оточення
dotenv.config();

// Налаштування CORS
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');
app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));

// Підключення роутера
app.use(router);

// Конект до DB та старт сервера  
connectToDB()
.then( ()=> {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    })
})
.catch( err => {
    console.error("Express server startup error:", err);
})
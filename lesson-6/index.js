//налаштовує базовий веб-сервер з використанням Express і обробляє HTTP-запити за допомогою визначених маршрутів, а також обробляє помилки, які можуть виникнути під час обробки запитів.

import "dotenv/config";

import express from "express";

import routes from "./routes/index.js";

import "./db.js";

const app = express();

app.use("/api", routes);

app.use((req, res, next) => {
    res.status(404).send("Not found");
});

app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).send("Internal Server error");
})

app.listen(8080, () => {
    console.log("Server started on port 8080");
});
// routes зазвичай використовується для організації маршрутів (routes) вашого додатку. Маршрути визначають, як ваш сервер відповідає на різні HTTP-запити, такі як запити GET, POST, PUT, DELETE тощо.

import express from "express";

import BookController from "../controllers/books.js";

const router = express.Router();
const jsonParser = express.json();

router.get("/", BookController.getAllBooks);

router.get("/:id", BookController.getOneBooks);

router.post("/", jsonParser, BookController.createBook);

router.put("/:id", jsonParser, BookController.updateBook);

router.delete("/:id", BookController.deleteBook);



export default router;
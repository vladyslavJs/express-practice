import express, { response } from "express";
import { error } from "node:console";
import * as fs from 'node:fs/promises';
import path from "node:path";

const app = express();

app.get("/movies", async (request, response, next) => {
    try {
        const data = await fs.readFile(path.resolve("books.txt"), {
            encoding: "utf-8",
        });

        response.send(data);  
    } catch (error) {
        next(error);
    }    
});

app.get("/books", async (request, response, next) => {
    try {
        const data = await fs.readFile(path.resolve("books.txt"), {
            encoding: "utf-8",
        });

        response.send(data);  
    } catch (error) {
        next(error);
    }    
});


//Запит на помилку, 404 - ресурсу не знайдено
app.use((request, response, next) => {
    response.status(404).send("Not Found");
});

//Виносимо в окрему функцію
function handlerError(error, request, response, next) {
    console.error(error);
    response.status(500).send("Internal Server Error");
};

//Handler application Error
app.use(handlerError);

app.listen(8080, () => {
    console.log("Server started on port 8080");
})
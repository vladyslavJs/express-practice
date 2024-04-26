import express from "express";
import crypto from "node:crypto";

const app = express();

// app.use(express.json());

const jsonParser = express.json();


app.post("/movies", jsonParser, (request, response) => {
    const { title, producer, year } = request.body;

    response.status(201).send({id: crypto.randomUUID(), title, producer, year});
    // response.send("Movie created");   
})


app.listen(8080, () => {
    console.log("Server started on port 8080");
})
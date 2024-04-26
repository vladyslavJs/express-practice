import express from "express";
import crypto from "node:crypto";

import movieSchema from "./schema/movie.js";
import morgan from "morgan";

const app = express();

app.use(morgan("combined"));

const jsonParser = express.json();


app.post("/movies", jsonParser, (request, response) => {
    const movie = {
        title: request.body.title,
        producer: request.body.producer,
        year: request.body.year, 
    }

    const { error, value } = movieSchema.validate(movie, { convert: false });
    
    if (typeof error !== "undefined") {
        return response.status(400).send("Validation Error")
    }

    response.status(201).send({id: crypto.randomUUID(), ...value});
})

app.listen(8080, () => {
    console.log("Server started on port 8080");
})
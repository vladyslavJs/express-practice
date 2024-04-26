import express from "express";
const app = express();

//Так ми дістаємо фільм по ID, динамічно
app.get("/movies/:movieId", (request, response) => {
    const { movieId } = request.params;

    response.send(`Movie ${movieId}`);
});


app.listen(8080, () => {
    console.log("Server started on port 8080");
})
//controllers використовується для зберігання модулів, які містять функції обробки запитів (controllers). Контролери визначають логіку обробки HTTP-запитів, які надходять до вашого сервера. 

import Book from "../models/books.js "

async function getAllBooks(req, res, next) {
    try {
        const allBooks = await Book.find();
        
        res.status(201).send(allBooks);  
    } catch (error) {
        next(error)
    }   
}

async function getOneBooks(req, res, next) {
    const { id } = req.params;
    try {
        const oneBook = await Book.findById(id);

        if (oneBook === null ) {
            return res.status(404).send("Book not found")
        }

        res.status(201).send(oneBook);  
    } catch (error) {
        next(error)
    }

}

async function createBook(req, res, next) {
    //Add Joi before
    const book = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        year: req.body.year,
        pages: req.body.pages
    }
    try {
        const result = await Book.create(book);

        res.status(201).send(result);
    } catch (error) {
        next(error)     
    }
}

async function deleteBook(req, res, next) {
    const { id } = req.params;
    try {
        const deleteBook = await Book.findByIdAndDelete(id);

        console.log(deleteBook);

        if (deleteBook === null) {
            return res.status(404).send("Book not found");
        }
        
        res.send({id});
    }
    catch (error) {
        next(error)
    }
}

async function updateBook(req, res, next) {
    const { id } = req.params;
     const book = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        year: req.body.year,
        pages: req.body.pages
    }
    try {
        const updateBooks = await Book.findByIdAndUpdate(id, book, { new: true });
        
        if (updateBooks === null) {
            return res.status(404).send("Book not found");
        }
        res.send(updateBooks);
    } catch (error) {
        next(error);
    }
}


//i експортуємо з цього файлу, для коректної роботи
export default {
    getAllBooks,
    getOneBooks,
    createBook,
    updateBook,
    deleteBook,
}
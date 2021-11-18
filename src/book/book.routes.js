const {Router} = require('express');
const {addBook,
    findBook,
    findBookById,
    updateTitle,
    updateAuthor,
    updateYear,
    deleteBook} = require('./book.controllers');

const bookRouter = Router();

bookRouter.post('/book', addBook);



bookRouter.get("/books",findBook);
bookRouter.get("/book/:id",findBookById);
bookRouter.patch("/update_title/:id",updateTitle);
bookRouter.patch("/update_author/:id",updateAuthor);
bookRouter.patch("/update_year/:id",updateYear);
bookRouter.delete("/delete_book/:id",deleteBook);


module.exports = bookRouter;

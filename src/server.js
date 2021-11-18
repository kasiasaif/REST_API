require('./db/connection');
const express = require('express');
const cors= require('cors');
const userRouter = require('./user/user.routes');
const bookRouter = require('./book/book.routes');
const app = express();
const port  = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(bookRouter);

app.get('/health',(req,res)=>{
    res.send({message: 'Servers up'});
});

app.listen(port, ()=>{
    console.log(`Listen on port ${port}`);
})

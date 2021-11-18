const Book = require("./book.model");

exports.addBook = async(req,res)=>{
    try{
        const result = new Book(req.body)
        await result.save();
        res
        .status(200)
        .send({message : 'Success', result })

    }catch(error){
        console.log(error);
        res
        .status(451)
        .send({message : 'Something went wrong, check server logs'})
    }
};

exports.findBook = async (req, res) => {
    try{
        const result =  await Book.find();
        res.send(result)

    }catch(error){
        console.log(error)
        res
        .status(500)
        .send({message: 'Something went wrong, check server logs'})
    }
}

exports.findBookById = async (req,res) => {
    try{
        const result = await Book.findById({_id: req.params.id});
        res.send(result)
    }catch(error){
        console.log(error);
        res
        .status(451)
        .send({message : 'Something went wrong, check server logs'});
    }
}

exports.updateTitle = async(req, res)=>{
    try{
        const result = await Book.updateOne({_id: req.params.id}, 
            {$set:{title: req.body.title}});
            res.json(result)
            console.log(result)
        res.status(200).send({message: result})

    }catch(error){
        console.log(error)
        res
        .status(418)
        .send({message: "Something went wrong, check server logs"})  
    }
}
exports.updateAuthor = async(req, res)=>{
    try{
        const result = await Book.updateOne({_id: req.params.id}, 
            {$set:{author: req.body.author}});
            res.json(result)
            console.log(result)
        res.status(200).send({message: result})

    }catch(error){
        console.log(error)
        res
        .status(418)
        .send({message: "Something went wrong, check server logs"})  
    }
}
exports.updateYear = async(req, res)=>{
    try{
        const result = await Book.updateOne({_id: req.params.id}, 
            {$set:{year: req.body.year}});
            res.json(result)
            console.log(result)
        res.status(200).send({message: result})

    }catch(error){
        console.log(error)
        res
        .status(418)
        .send({message: "Something went wrong, check server logs"})  
    }
}
exports.deleteBook = async(req, res)=>{
    try{
        const result = await Book.remove({_id: req.params.id});
        res.json(result)
        res.status(200).send({message: "Success",result})

    }catch(error){
        console.log(error)
        res
        .status(418)
        .send({message: "Something went wrong, check server logs"})  
    }
}
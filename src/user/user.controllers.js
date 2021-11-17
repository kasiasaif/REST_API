const User = require('./user.model');

exports.addUser = async(req,res)=>{
    try{
        const result = new User(req.body)
        await result.save();
        res.status(200).send({message : 'Success', result })

    }catch(error){
        console.log(error);
        res.status(451).send({message : 'Something went wrong, check server logs'})
    }
}
const User = require("./user.model");

exports.addUser = async(req,res)=>{
    try{
        const result = new User(req.body)
        const token = await result.genereteAuthToken();
        await result.save();
        res
        .status(200)
        .send({message : 'Success', result , token})

    }catch(error){
        console.log(error);
        res
        .status(451)
        .send({message : 'Something went wrong, check server logs'})
    }
};

exports.logIn = async (req,res) => {
    try{
        const token = await req.user.genereteAuthToken();
        res.status(200).send({user : req.user, token});
    }catch(error){
        console.log(error);
        res
        .status(451)
        .send({message : 'Something went wrong, check server logs'});
    }

}
exports.findUser = async (req, res) => {
    try{
        const result =  await User.find();
        res.send(result)

    }catch(error){
        console.log(error)
        res
        .status(500)
        .send({message: 'Something went wrong, check server logs'})
    }
}

exports.findUserById = async (req,res) => {
    try{
        const result = await User.findById({_id: req.params.id});
        res.send(result)
    }catch(error){
        console.log(error);
        res
        .status(451)
        .send({message : 'Something went wrong, check server logs'});
    }
}
exports.updateUser = async(req, res)=>{
    try{
        const result = await User.updateOne({_id: req.params.id}, 
            {$set:{username: req.body.username}});
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
exports.deleteUser = async(req, res)=>{
    try{
        const result = await User.remove({_id: req.params.id});
        res.json(result)
        res.status(200).send({message: "Success",result})

    }catch(error){
        console.log(error)
        res
        .status(418)
        .send({message: "Something went wrong, check server logs"})  
    }
}
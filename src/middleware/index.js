const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require('../user/user.model')


exports.hashPassword = async (req, res, next) => {
    try{
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    }catch(error){
        console.log(error);
        res.status(500).send({message: "Check server logs"});
    }
};


exports.comparePassword = async (req,res,next) => {
    try{
    const user = await User.findOne({email : req.body.email});
        if(await bcrypt.compare(req.body.password, user.password)){
            req.user = user;
            next();
        }else{
            throw new Error();
        }
    }catch(error){
        console.log(error);
        res.status(500).send({message: "Check server logs"});
    }
}
exports.tokenAuth = async (req,res,next) => {
try{
    const tokenObj = jwt.verify(req.header("Authorization").replace("Bearer ", ""), process.env.SECRET);
    req.user = await User.findOne({_id : tokenObj._id});
    console.log(tokenObj)
    if(!req.user){
    throw new Error();
    }
    next();
}catch(error){
    console.log(error)
    res.status(500).send({message: "Check logs"})
}
}
const {Router} = require('express');
const {addUser,
    findUser,
    findUserById,
    updateUser,
    deleteUser,
    logIn} = require('./user.controllers');
const {hashPassword, comparePassword, tokenAuth} = require('../middleware')
const userRouter = Router();

userRouter.post('/user',hashPassword, addUser);
userRouter.post('/login',comparePassword, logIn);
userRouter.get('/token',tokenAuth, logIn);

userRouter.get("/get",findUser);
userRouter.get("/get/:id",findUserById);
userRouter.patch("/update/:id",updateUser);
userRouter.delete("/delete/:id",deleteUser);


module.exports = userRouter;

const {Router} = require('express');
const {addUser,
    findUser,
    findUserById,
    updateUsername,
    updateEmail,
    updatePassword,
    deleteUser,
    logIn} = require('./user.controllers');
const {hashPassword, comparePassword, tokenAuth} = require('../middleware')
const userRouter = Router();

userRouter.post('/user',hashPassword, addUser);
userRouter.post('/login',comparePassword, logIn);
userRouter.get('/token',tokenAuth, logIn);

userRouter.get("/users",findUser);
userRouter.get("/get/:id",findUserById);
userRouter.patch("/update_username/:id",updateUsername);
userRouter.patch("/update_email/:id",updateEmail);
userRouter.patch("/update_password/:id",updatePassword);
userRouter.delete("/delete/:id",deleteUser);


module.exports = userRouter;

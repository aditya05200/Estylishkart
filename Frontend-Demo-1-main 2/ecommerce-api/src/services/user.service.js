const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider");

const createUser = async (userData) => {
    try {
        console.log("User data received:", userData);
        const isUserExist = await User.findOne({ email: userData.email });
        if (isUserExist) {
            throw new Error("Email already exists, please try another email");
        }
        userData.password = await bcrypt.hash(userData.password, 8);
        const user = await User.create(userData);
        console.log("User successfully created:", user);
        return user;
    } catch (error) {
        console.error("Error creating user:", error.message);
        throw new Error(error.message);
    }
};


const findUserById = async(userId) => {
    try{
        const user = await User.findById(userId)
        // .populate("address");
        if(!user){
            throw new Error("User not found with id:",userId)
        }
        return user;
    }catch(error){
        throw new Error(error.message)
    }
}

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email }); 
        if (!user) {
            throw new Error(`User not found with email: ${email}`); 
        }
        return user;
    } catch (error) {
        throw new Error(error.message); 
    }
};


const getUserProfileByToken = async(token) => {
    try{
        const userId = jwtProvider.getUserIdFromToken(token);
        const user = await findUserById(userId);
        if(!user){
            throw new Error("User not found with id:",userId)
        }
        return user;
    }catch(error){
        throw new Error(error.message)
    }
}

const getAllUsers = async() => {
    try{
        const users = await User.find();
        return users;
    }catch(error){
        throw new Error(error.message)
    }
}

module.exports = {createUser, getUserByEmail, findUserById, getUserProfileByToken, getAllUsers};
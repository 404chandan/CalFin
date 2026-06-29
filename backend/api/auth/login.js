import express from "express";
import User from "../../models/Users.js";

const loginrouter = express.Router();

loginrouter.post("/login", async (req, res)=>{
    try {
        const { email, password } = req.body;

        // Finding user in mongodb
        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({
                success:false,
                message: "User does not exist, first create an account"
            });
        }
        // if exists then compare password 
        if(user.password !== password){
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }
        res.status(200).json({
            success:true,
            message: "Login Successful",
            user:{
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    }
        catch(error){
            res.status(500).json({
                success: false,
                message: error.nessage
            });
        }

});

export default loginrouter;
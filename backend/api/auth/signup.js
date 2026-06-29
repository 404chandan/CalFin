import express from "express";
import User from "../../models/Users.js";

const signUprouter = express.Router();

signUprouter.post("/signup", async (req, res)=>{
    try {
        const { name, email, password } = req.body;

        // Finding user in mongodb
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(409).json({
                success:false,
                message: "User already exists"
            });
        }
        const newUser = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            success:true,
            message: "Sign Up Successful",
            user:{
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });
    }
        catch(error){
            res.status(500).json({
                success: false,
                message: error.message
            });
        }

});

export default signUprouter;
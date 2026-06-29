import express from "express";
import dotenv from "dotenv";
import connectDB from "./services/db.js";
import loginrouter from "./api/auth/login.js";
import signUprouter from "./api/auth/signup.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

// Middleware 
app.use(express.json());

connectDB();

app.use("/api/auth", loginrouter);
app.use("/api/auth", signUprouter);

app.get('/',(req,res)=>{
    res.send("Welcome to the CalFin - Your personalised expense tracker")
});

app.listen(PORT,()=>{
    console.log(`Your CalFin server is running on PORT ${PORT}`);
    
});





import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware 
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome to the CalFin - Your personalised expense tracker")
});

app.listen(PORT,()=>{
    console.log(`Your CalFin server is running on PORT ${PORT}`)
});




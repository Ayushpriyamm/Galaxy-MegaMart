
import express from "express";
import dbConnection from "./src/config/dbConfig.js";
import userRouter from './src/routes/userRoute.js';
dbConnection()
const app=express();


const PORT=process.env.PORT || 3000;

app.use(express.json());

console.log("Initilizing routes");
app.use('/user',userRouter);

console.log("Routes Initilization completed");

app.listen(PORT,()=>[
    console.log(`Server is running on port ${PORT}`)
])
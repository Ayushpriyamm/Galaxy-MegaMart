
import express from "express";
import dbConnection from "./src/config/dbConfig.js";
import userRouter from './src/routes/userRoute.js';
dbConnection()
const app = express();


const PORT = process.env.PORT || 3000;
app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    credentials: true,  
    methods: ["GET", "POST", "PUT", "DELETE"],            // If you're using cookies/auth headers
}));

app.use(express.json());

console.log("Initilizing routes");
app.use('/user', userRouter);

console.log("Routes Initilization completed");

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
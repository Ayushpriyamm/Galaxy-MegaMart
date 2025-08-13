
import express from "express";
import cors from 'cors'
import dbConnection from "./src/config/dbConfig.js";
import userRouter from './src/routes/userRoute.js';
import productRouter from './src/routes/productRoute.js'
import adminRoute from './src/routes/adminRoute.js';
import categoryRoute from './src/routes/categoryRoute.js'
import cartRouter from './src/routes/cartRoute.js';
import cookieParser from "cookie-parser";
dbConnection()
const app = express();


const PORT = process.env.PORT || 3000;
app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    credentials: true,  
    methods: ["GET", "POST", "PUT", "DELETE"],            // If you're using cookies/auth headers
}));

app.use(express.json());
app.use(cookieParser());
console.log("Initilizing routes");
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/category',categoryRoute)
app.use('/cart',cartRouter);
app.use('/dev', adminRoute);


console.log("Routes Initilization completed");

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
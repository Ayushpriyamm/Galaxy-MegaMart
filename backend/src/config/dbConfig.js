import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const MONGO_URI=process.env.MONGO_URI

export default async function dbConnection() {
    try {
        const conn=await mongoose.connect(MONGO_URI)
        console.log("✅ Database connection successful")
        
    } catch (error) {
        console.error("❌ Database connection failed:", error);
        process.exit(1);
    }
}
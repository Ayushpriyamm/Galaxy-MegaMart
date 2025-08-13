import mongoose from 'mongoose'

import { Schema } from 'mongoose'

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        require: true,
    },
    cart:{
        type:mongoose.Types.ObjectId,
        ref:'Cart'
    },
    phoneNumber: {
        type: Number,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verifyCode: {
        type: String,
    },
    verificationCodeExpiry: {
        type: Date,
    },
    role: {
        type: String,
        enum:['User','Admin','Delivery'],
        default: "User"
    },
    
}, { timestamps: true })

const user = mongoose.model('User', userSchema);
export default user;
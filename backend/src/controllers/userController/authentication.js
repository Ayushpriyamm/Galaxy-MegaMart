
import jwt from 'jsonwebtoken';
import user from "../../models/userSchema.js";
import bcryptjs from 'bcryptjs'

export async function signUp(req, res) {
    try {
        const { userName, email, password, phoneNumber } = req.body;

        console.log("signin req.body:", req.body);


        if (!userName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "username ,Email, paswword all these are required",
            })
        }

        const existedUser = await user.findOne({ email });
        if (existedUser) {
            return res.status(400).json({
                success: false,
                message: "user Already exist",

            })
        }
        const hashedPassword = bcryptjs.hashSync(password, 10);

        const newUser = await user.create({
            userName,
            email,
            password: hashedPassword,
            phoneNumber
        }
        )

        const token = jwt.sign({ id: newUser._id,role:newUser.role }, process.env.JWT_SCERET, {
            expiresIn: "1d"
        });
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "Strict",
            secure: process.env.NODE_ENV === "production"
        });

        return res.status(201).json({
            data: newUser,
            token,  
            success: true,
            message: "User registered sceesfull",

        })



    } catch (error) {
        console.log("Error creating user", error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",

        })
    }
};

export async function signin(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Both email and password is required",

            })
        }

        const userExisted = await user.findOne({ email: email });

        if (!userExisted) {
            return res.status(400).json({
                success: false,
                message: "user not existed",
            })
        }
        const validPassword = bcryptjs.compareSync(password, userExisted.password)

        if (!validPassword) {
            return res.status(401).json({
                success: false,
                message: "Incorrect Password",
            })
        }


        const token = jwt.sign(
            { id: userExisted._id, role: userExisted.role },
            process.env.JWT_SCERET,
            { expiresIn: '1d' })



        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        })

        return res.status(200).json({
            data: userExisted,

            token,
            success: true,
            message: "User signin Successfull",
        })

    } catch (error) {
        console.log("Error signing user", error)
        return res.json({
            success: false,
            message: "Internal Server Error",
            status: 500
        })
    }
}

export async function signOut(req, res) {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV == 'production',
            sameSite: "strict"
        })

        return res.status(200).json({
            success: true,
            message: "User logout successfullly"
        })
    } catch (error) {
        console.log("Error logging out user", error)
        return res.json({
            success: false,
            message: "Internal Server Error",
            status: 500
        })
    }
}
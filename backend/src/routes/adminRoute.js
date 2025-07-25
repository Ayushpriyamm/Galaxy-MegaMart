// routes/devRoutes.js (or adminInit.js)

import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/userSchema.js';

const router = express.Router();

// router.post('/create-admin', async (req, res) => {
//     try {
//         const existing = await User.findOne({ email: "admin@gamil.com" });
//         if (existing) {
//             return res.status(400).json({ message: "Admin already exists" });
//         }

//         const hashedPassword = await bcrypt.hash("Admin@123", 10);

//         const admin = await User.create({
//             userName: "SuperAdmin",
//             email: "admin@gamil.com",
//             password: hashedPassword,
//             phoneNumber: 1234567890,
//             isVerified: true,
//             role: "Admin"
//         });

//         res.status(201).json({
//             message: "Admin created",
//             admin: {
//                 id: admin._id,
//                 email: admin.email,
//                 role: admin.role,
//             },
//         });
//     } catch (err) {
//         console.error("Error creating admin:", err);
//         res.status(500).json({ message: "Server error" });
//     }
// });

export default router;

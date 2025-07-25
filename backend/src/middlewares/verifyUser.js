import Jwt from 'jsonwebtoken'
import User from '../models/userSchema.js';

export async function verifyUser(req, res, next) {
    try {

        const token = req.cookies.token

        if (!token) {
            return res.status(404).json({
                message: "Not authenticated"

            })
        }

        const decode = Jwt.verify(token, process.env.JWT_SCERET)
        const user = await User.findById(decode.id).select('-password')
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = user
        next()
    } catch (error) {
        console.error("verifyUser error:", error);
        return res.status(403).json({ message: "Invalid or expired token" });
    }
}



export  function authorizedRoles(...allowedRoles) {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `Access denied. Only ${allowedRoles.join(", ")} allowed.`,
            })
        }
        next();
    }
}
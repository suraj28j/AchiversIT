import jwt from 'jsonwebtoken';
import User from '../models/UserSchema.js'

// Token based verification
export const authenticate = (req, res, next) => {
    // To get auth token from headers
    const authToken = req.headers.authorization

    if (!authToken || !authToken.startsWith("Bearer")) {
        return res.status(401).json({ success: false, message: "Autherization denied" })
    }

    try {
        const token = authToken.split(" ")[1];

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded.id;
        req.role = decoded.role;
        next()
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ success: false, message: "Token Expired" })
        }
        return res.status(401).json({ success: false, message: "Invalid token, Please login again" })
    }
}

// Roles based verification
export const restrict = (roles) => async (req, res, next) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }
        const userRole = user.role;
        if (userRole === "user" && roles.includes("user")) {
            next()
        } else if (userRole === "admin" && roles.includes("admin")) {
            next();
        } else {
            return res.status(401).json({ success: false, message: "You do not have to access this route" });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}
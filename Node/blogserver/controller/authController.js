import User from '../models/UserSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: "5d" })
}

export const registerUser = async (req, res, next) => {
    const { email, password, name, phone, role } = req.body

    try {
        let user = await User.findOne({ email: email });

        if (user) {
            return res.status(400).json({ message: "User alrady exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        user = new User({
            name,
            email,
            password: hashPassword,
            phone,
            role,
        })
        await user.save();
        res.status(200).json({ success: true, message: "User saved successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export const login = async (req, res, next) => {
    const { email } = req.body;
    try {
        let user = await User.findOne({ email: email })
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found...!" })
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)
        
        if (!isPasswordMatch) {
           return res.status(400).json({ success: false, message: "Incorrect Password" })
        }
        const token = generateToken(user);
        const { password, role, ...rest } = user._doc;

        res.status(200).json({ success: true, message: "User login successfull", token, data:{...rest}, role })

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to login" })
    }
}
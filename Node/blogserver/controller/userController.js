import User from "../models/UserSchema.js";

export const updateUser = async (req, res, next) => {
    const id = req.params.id
    try {
        let user = await User.findOne({ _id: id });
        if (!user) {
            return res.status(404).json({ message: "User no found" });
        }
        await User.findByIdAndUpdate(
            id, { $set: req.body }, { new: true }
        )
        return res.status(200).json({ success: true, message: "User updated successfully" })
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const deleteUser = async (req, res, next) => {
    const userId = req.params.id

    try {
        let user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(404).json({ message: "User no found" });
        }
        await User.findByIdAndDelete(userId)
        return res.status(200).json({ success: true, message: "User deleted successfully...!" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const getAllUser = async (req, res, next) => {
    try {
        const user = await User.find({}).select("-password");
        res.status(200).json({ success: true, message: "Users found successfully", data: user });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const getSingleUser = async (req, res, next) => {
    const id = req.userId
    try {
        const user = await User.findById({ _id: id }).select("-password");
        res.status(200).json({ success: true, message: "Users found successfully", data: user });
    } catch (error) {
        console.log(error);

        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}
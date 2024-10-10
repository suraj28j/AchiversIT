import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    phone: {
        type: Number
    },
    role:{
        type:String,
        enum:["admin","user","manager"],
        default:"user"
    }
})

export default mongoose.model("User", UserSchema)
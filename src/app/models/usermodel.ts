import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    image: {
        type: String
    },
    address: {
        type: String

    }

}, {
    timestamps: true
})
const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);

export default UserModel
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

const UserModel = mongoose.model("student", userSchema);

export default UserModel;
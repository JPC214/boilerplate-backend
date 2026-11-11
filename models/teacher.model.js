import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

const TeacherModel = mongoose.model("teacher", teacherSchema);

export default TeacherModel;
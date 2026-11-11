import express from "express";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./configs/swagger.config.js";

import userRouter from "./routes/user.route.js";
import teacherRouter from "./routes/teacher.route.js";
import path from "node:path";

const app = express();
const PORT = 3000;

//middleware
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.static(path.resolve("public")));

//database
const MONGODB_URL = "mongodb://localhost:27017/school_db";

await mongoose.connect(MONGODB_URL);

console.log("DB Connected!");

//route
app.use("/api/users", userRouter);
app.use("/api/teachers", teacherRouter);

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
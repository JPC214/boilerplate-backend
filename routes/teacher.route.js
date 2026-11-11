import express from "express";
import {
    getAllRecords, 
    createRecord, 
    updateRecord, 
    patchRecord,
    deleteRecord
} from "../controllers/teacher.controller.js";

const teacherRouter = express.Router();

teacherRouter.get("/", getAllRecords);
teacherRouter.post("/", createRecord);
teacherRouter.put("/:id", updateRecord);
teacherRouter.patch("/:id", patchRecord);
teacherRouter.delete("/:id", deleteRecord);

export default teacherRouter;
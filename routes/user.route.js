import express from "express";
import {
    getAllRecords, 
    createRecord, 
    updateRecord, 
    patchRecord,
    deleteRecord
} from "../controllers/user.controller.js";

const userRouter = express.Router();

/**
 * @swagger
 * tags:
 *  - name: Users
 *    description: User Management Endpoints
 */

/**
 * @swagger
 * /api/users:
 *      get:
 *          summary: Get all users
 *          tags: [Users]
 *          responses:
 *              200:
 *                  description: list of users
 *              400:
 *                  description: Request failed
 */

userRouter.get("/", getAllRecords);

/**
 * @swagger
 * /api/users:
 *      post:
 *          summary: Create new user
 *          tags: [Users]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          required:
 *                              - name
 *                              - age
 *                              - course
 *                          properties:
 *                              name:
 *                                  type: string
 *                                  example: John Paul
 *                              age:
 *                                  type: number
 *                                  example: 30
 *                              course:
 *                                  type: string
 *                                  example: Musician
 *      responses:
 *          201:
 *              description: User created
 *          401:
 *              description: Creation failed
 */
userRouter.post("/", createRecord);
userRouter.put("/:id", updateRecord);
userRouter.patch("/:id", patchRecord);
userRouter.delete("/:id", deleteRecord);

export default userRouter;
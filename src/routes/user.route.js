import express from "express";
import asyncHandler from "express-async-handler";
import userController from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.post('/signin', asyncHandler(userController.userSignin));
userRouter.post('/mission', asyncHandler(userController.addMissionToMember));
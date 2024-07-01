import express from "express";
import asyncHandler from "express-async-handler";
import missionController from "../controllers/mission.controller.js";

export const missionRouter = express.Router();

missionRouter.get('/:memberId', asyncHandler(missionController.getMissionsInProgressByMemberIdWithPaging))
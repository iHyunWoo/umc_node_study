import express from "express";
import asyncHandler from "express-async-handler";
import storeController from "../controllers/store.controller.js";

export const storeRouter = express.Router();

storeRouter.post('/', asyncHandler(storeController.addStore));
storeRouter.post('/review', asyncHandler(storeController.addReview));
storeRouter.post('/mission', asyncHandler(storeController.addMission));
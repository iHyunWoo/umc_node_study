import express from "express";
import asyncHandler from "express-async-handler";
import reviewController from "../controllers/review.controller.js";

export const reviewRouter = express.Router();

reviewRouter.get('/:memberId', asyncHandler(reviewController.getReviews))
reviewRouter.get('/store/:storeId', asyncHandler(reviewController.getReviewsWithStoreId))
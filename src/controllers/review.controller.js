import { response } from '../../config/response.js';
import { status } from "../../config/response.status.js"
import reviewService from "../services/review.service.js"

const reviewController = {
    getReviews: async (req, res, next) => {
        res.send(response(status.SUCCESS, await reviewService.getReviewsViaMemberId(req.params.memberId, parseInt(req.query.page) || 3, parseInt(req.query.offset) || 0)))
    },
    getReviewsWithStoreId: async (req, res, next) => {
        res.send(response(status.SUCCESS, await reviewService.getReivewsViaStoreId(req.params.storeId, parseInt(req.query.lastId) || -1, parseInt(req.query.page) || 3)))
    }
}

export default reviewController
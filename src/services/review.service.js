import reviewDao from "../models/review/review.dao.js"

const reviewService = {
    getReviewsViaMemberId: async (member_id, page, offset) => {
        return await reviewDao.getReviewsByMemberIdWithPaging(member_id, page, offset)
    },
    getReivewsViaStoreId: async (store_id, lastId, page) => {
        return await reviewDao.getReviewsByStoreIdWithPaging(store_id, lastId, page)
    },
}

export default reviewService
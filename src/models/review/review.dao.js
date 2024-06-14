import { pool } from "../../../config/db.config.js"
import { BaseError } from "../../../config/error.js";
import { status } from "../../../config/response.status.js";
import { getReviewResponseDTO } from "./review.dto.js";
import reviewSQL from "./review.sql.js";

const reviewDao = {
    getReviewsByMemberIdWithPaging: async (memberId, page, offset) => {
        try {
            const conn = await pool.getConnection();

            const sql_result = await pool.query(reviewSQL.getReviewsByMemberIdWithPaging, [memberId, page, offset])
            const result = sql_result[0].map((review) => {
                return getReviewResponseDTO(review.id, review.member_name, review.store_name, review.body, review.score)
            })
            conn.release();
            
            return result
        } catch(err) {
            console.log(err);
            throw new BaseError(status.PARAMETER_IS_WRONG);
        }
    },
    getReviewsByStoreIdWithPaging: async (storeId, lastId, page) => {
        try {
            const conn = await pool.getConnection();

            const sql_result = await pool.query(reviewSQL.getReviewsByStoreIdWithPaging, [storeId, lastId, page])
            const result = sql_result[0].map((review) => {
                return getReviewResponseDTO(review.id, review.member_name, review.store_name, review.body, review.score)
            })
            conn.release();
            
            return result
        } catch(err) {
            console.log(err);
            throw new BaseError(status.PARAMETER_IS_WRONG);
        }
    }
}

export default reviewDao
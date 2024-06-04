import { pool } from "../../../config/db.config.js";
import { BaseError } from "../../../config/error.js";
import { status } from "../../../config/response.status.js";
import { insertStore, insertReview, insertMission, getStore, getStoreIdFromMission } from "./store.sql.js";


const storeDao = {
    addStore: async (data) => {
        try {
            const conn = await pool.getConnection();
            await pool.query(insertStore, [data.region_id, data.name, data.address, data.score]);

            conn.release();
            return;
        } catch (err) {
            throw new BaseError(status.PARAMETER_IS_WRONG);
        }
    },
    addReview: async (data) => {
        try {
            // 가게 존재 여부 확인
            const [storeRows] = await pool.query(getStore, [data.store_id]);

            // 가게가 존재하지 않는 경우
            if (storeRows.length === 0) {
                return -1
            }

            const conn = await pool.getConnection();
            await pool.query(insertReview, [data.member_id, data.store_id, data.body, data.score]);
            
            conn.release();
            return;
        } catch (err) {
            throw new BaseError(status.PARAMETER_IS_WRONG);
        }
    },
    addMission: async (data) => {
        try {
            const conn = await pool.getConnection();

            // 가게 존재 여부 확인
            const [storeRows] = await pool.query(getStore, [data.store_id]);

            // 가게가 존재하지 않는 경우
            if (storeRows.length === 0) {
                return -1
            }

            await pool.query(insertMission, [data.store_id, data.reward, data.deadline, data.mission_spec]);
            conn.release();
            return;
        } catch (err) {
            throw new BaseError(status.PARAMETER_IS_WRONG);
        }
    }
};

export default storeDao;
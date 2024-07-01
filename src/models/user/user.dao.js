import { pool } from "../../../config/db.config.js";
import { BaseError } from "../../../config/error.js";
import { status } from "../../../config/response.status.js";
import { 
    connectFoodCategory,
    confirmEmail,
    getUserID,
    insertUserSql,
    getPreferToUserID,
    insertMissionToMember
 } from "./user.sql.js";
 
import { getStore, getStoreIdFromMission } from "../store/store.sql.js";

const userDao = {
    addUser: async (data) => {
        try{
            const conn = await pool.getConnection();
            
            const [confirm] = await pool.query(confirmEmail, data.email);
    
            if(confirm[0].isExistEmail){
                conn.release();
                return -1;
            }
    
            const result = await pool.query(insertUserSql, [data.email, data.name, data.gender, data.addr, data.specAddr]);
    
            conn.release();
            return result[0].insertId;
            
        }catch (err) {
            console.log(err)
            throw new BaseError(status.PARAMETER_IS_WRONG);
        }
    },
    getUser: async (userId) => {
        try {
            const conn = await pool.getConnection();
            const [user] = await pool.query(getUserID, userId);
    
            console.log(user);
    
            if(user.length == 0){
                return -1;
            }
    
            conn.release();
            return user;
            
        } catch (err) {
            throw new BaseError(status.PARAMETER_IS_WRONG);
        }
    },
    setPrefer: async (userId, foodCategoryId) => {
        try {
            const conn = await pool.getConnection();
            
            await pool.query(connectFoodCategory, [foodCategoryId, userId]);
    
            conn.release();
            
            return;
        } catch (err) {
            throw new BaseError(status.PARAMETER_IS_WRONG);
    
        }
    },
    getUserPreferToUserID: async (userID) => {
        try {
            const conn = await pool.getConnection();
            const prefer = await pool.query(getPreferToUserID, userID);
    
            conn.release();
    
            return prefer;
        } catch (err) {
            throw new BaseError(status.PARAMETER_IS_WRONG);
        }
    },
    addMissionToMemeber: async (data) => {
        try {
            const conn = await pool.getConnection();
            // 미션의 가게 id 가져와야 함
            const [storeIds] = await pool.query(getStoreIdFromMission, [data.mission_id]);

            if (storeIds.length === 0) {
                return -1
            }
            // 가게 id로 가게 존재 여부 확인
            const [storeRows] = await pool.query(getStore, [storeIds[0].store_id]);
            if (storeRows.length === 0) {
                return -2
            }

            await pool.query(insertMissionToMember, [data.member_id, data.mission_id, data.status]);

            conn.release();
            return;
        } catch (err) {
            throw new BaseError(status.PARAMETER_IS_WRONG);
        }
    }
};

export default userDao;
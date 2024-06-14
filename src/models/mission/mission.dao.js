import { pool } from "../../../config/db.config.js"
import { getMissionResponseDTO } from "./mission.dto.js";
import missionSQL from "./mission.sql.js";

const missionDao = {
    getMissionsInProgressByMemberIdWithPaging: async (memberId, page, offset) => {
        try {
            const conn = await pool.getConnection();
            const sql_result = await pool.query(missionSQL.getMissionsInProgressByMemberIdWithPaging, [memberId, page, offset])
            const result = sql_result[0].map((mm) => {
                return getMissionResponseDTO(mm.member_mission_id, mm.status, mm.store_name, mm.reward, mm.deadline, mm.mission_spec);
            })

            conn.release();
            
            return result
        } catch (err) {
            console.log(err);
            throw new BaseError(status.PARAMETER_IS_WRONG);
        }
    }
}

export default missionDao
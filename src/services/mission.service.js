import missionDao from "../models/mission/mission.dao.js"

const missionService = {
    getMissionsInProgressByMemberIdWithPaging: async (member_id, page, offset) => {
        return await missionDao.getMissionsInProgressByMemberIdWithPaging(member_id, page, offset)
    }
}

export default missionService
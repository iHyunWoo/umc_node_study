import { response } from '../../config/response.js';
import { status } from "../../config/response.status.js"
import missionService from "../services/mission.service.js"

const missionController = {
    getMissionsInProgressByMemberIdWithPaging: async (req, res, next) => {
        res.send(response(status.SUCCESS, await missionService.getMissionsInProgressByMemberIdWithPaging(req.params.memberId, parseInt(req.query.page) || 3, parseInt(req.query.offset) || 0)))
    }
}

export default missionController
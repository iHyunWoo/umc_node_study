import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { signinResponseDTO } from "../models/user/user.dto.js";
import userDao from "../models/user/user.dao.js";

const userService = {
    joinUser: async (body) => {
        // const prefer = body.prefer;
    
        const joinUserData = await userDao.addUser({
            'email': body.email,
            'name': body.name,
            'gender': body.gender,
            'addr': body.addr,
            'specAddr': body.specAddr
        });
    
        if(joinUserData == -1){
            throw new BaseError(status.EMAIL_ALREADY_EXIST);
        }else{
            // for (let i = 0; i < prefer.length; i++) {
            //     await setPrefer(joinUserData, prefer[i]);
            // }
            return signinResponseDTO(await userDao.getUser(joinUserData), await userDao.getUserPreferToUserID(joinUserData));
        }
    },
    addMissionToMemeber: async (body) => {
        const memberMissionData = await userDao.addMissionToMemeber({
            'member_id': body.member_id,
            'mission_id': body.mission_id,
            'status': body.status,
        })

        if (memberMissionData == -1) {
            throw new BaseError(status.MISSION_NOT_FOUND);
        } else if (memberMissionData == -2) {
            throw new BaseError(status.STORE_NOT_FOUND);
        }

        return;
    }

}

export default userService;


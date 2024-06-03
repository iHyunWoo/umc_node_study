import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { signinResponseDTO } from "../models/user.dto.js";
import { addUser, getUser, getUserPreferToUserID, setPrefer } from "../models/user.dao.js";

export const joinUser = async (body) => {
    // const prefer = body.prefer;

    const joinUserData = await addUser({
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
        return signinResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
    }
}
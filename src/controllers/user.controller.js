import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';

import userService from '../services/user.service.js';

const userController = {
    userSignin: async (req, res, next) => {
        console.log("회원가입을 요청하였습니다!");
        console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용
    
        res.send(response(status.SUCCESS, await userService.joinUser(req.body)));
    },
    addMissionToMember: async (req, res, next) => {
        console.log("멤버에게 미션 추가를 요청하였습니다!");
        console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

        res.send(response(status.SUCCESS, await userService.addMissionToMemeber(req.body)));
    }
}

export default userController;
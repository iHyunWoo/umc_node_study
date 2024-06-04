import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';

import storeService from '../services/store.service.js';

const storeController = {
    addStore: async (req, res, next) => {
        console.log("가게 추가를 요청하였습니다!");
        console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

        res.send(response(status.SUCCESS, await storeService.addStore(req.body)));
    },

    addReview: async (req, res, next) => {
        console.log("리뷰 추가를 요청하였습니다!");
        console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

        res.send(response(status.SUCCESS, await storeService.addReview(req.body)));
    },

    addMission: async (req, res, next) => {
        console.log("미션 추가를 요청하였습니다!");
        console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

        res.send(response(status.SUCCESS, await storeService.addMission(req.body)));
    }
};

export default storeController;
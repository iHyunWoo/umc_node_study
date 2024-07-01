import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import storeDao from "../models/store/store.dao.js";

const storeService = {
    addStore: async (body) => {
        const storeData = await storeDao.addStore({
            'region_id': body.region_id,
            'name': body.name,
            'address': body.address,
            'score': body.score,
        });

        return;
    },

    addReview: async (body) => {
        const reviewData = await storeDao.addReview({
            'member_id': body.member_id,
            'store_id': body.store_id,
            'body': body.body,
            'score': body.score,
        })

        if (reviewData == -1) {
            throw new BaseError(status.STORE_NOT_FOUND);
        }

        return;
    },
    addMission: async (body) => {
        const missionData = await storeDao.addMission({
            'store_id': body.store_id,
            'reward': body.reward,
            'deadline': body.deadline,
            'mission_spec': body.mission_spec,
        })

        if (missionData == -1) {
            throw new BaseError(status.STORE_NOT_FOUND);
        }

        return;

    }
};

export default storeService;
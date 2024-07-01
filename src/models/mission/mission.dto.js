export const getMissionResponseDTO = (member_mission_id, status, store_name, reward, deadline, mission_spec) => {
    return {
        "member_mission_id": member_mission_id,
        "status": status,
        "store_name": store_name,
        "reward": reward,
        "deadline": deadline,
        "mission_spec": mission_spec
    };
}
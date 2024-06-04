// 특정 지역에 가게 추가하기
export const insertStore = "INSERT INTO store (region_id, name, address, score) VALUES (?, ?, ?, ?);"

// 가게에 리뷰 추가하기 
export const insertReview = "INSERT INTO review (member_id, store_id, body, score) VALUES (?, ?, ?, ?); "

// 가게에 미션 추가하기
export const insertMission = "INSERT INTO mission (store_id, reward, deadline, mission_spec) VALUES (?, ?, ?, ?);"

// 가게 id로 가게 존재 여부 확인
export const getStore = "SELECT id FROM store WHERE id = ?";

// 해당 미션의 가게 id 가져오기
export const getStoreIdFromMission = "SELECT store_id FROM mission WHERE id = ?";
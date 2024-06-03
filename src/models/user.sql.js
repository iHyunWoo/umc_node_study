export const insertUserSql = "INSERT INTO member (email, name, gender, address, spec_address) VALUES (?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM member WHERE id = ?";

export const connectFoodCategory = "INSERT INTO member_prefer (category_id, member_id) VALUES (?, ?);";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM member WHERE email = ?) as isExistEmail";

export const getPreferToUserID =
"SELECT mf.id, mf.category_id, mf.member_id, fc.name "
+ "FROM member_prefer mf JOIN food_category fc on mf.category_id = fc.id "
+ "WHERE mf.member_id = ? ORDER BY mf.category_id ASC;";
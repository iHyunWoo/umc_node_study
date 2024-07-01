const reviewSQL = {
    getReviewsByMemberIdWithPaging: 
    "SELECT r.*, m.name AS member_name, s.name AS store_name"
    + " FROM review r"
    + " JOIN member m ON r.member_id = m.id"
    + " JOIN store s ON r.store_id = s.id"
    + " WHERE r.member_id = ?"
    + " LIMIT ? OFFSET ?"
    ,
    getReviewsByStoreIdWithPaging:
    "SELECT r.*, m.name AS member_name, s.name AS store_name"
    + " FROM review r"
    + " JOIN member m ON r.member_id = m.id"
    + " JOIN store s ON r.store_id = s.id" 
    + " WHERE r.store_id = ?"
    + " AND r.id > ?"
    + " ORDER BY r.id ASC"
    + " LIMIT ?"


}

export default reviewSQL;
const missionSQL = {
    getMissionsInProgressByMemberIdWithPaging:
    "SELECT mm.id AS member_mission_id, mm.status, m.*, s.name AS store_name"
    + " FROM member_mission mm"
    + " JOIN mission m ON mm.mission_id = m.id"
    + " JOIN store s ON m.store_id = s.id"
    + " WHERE mm.member_id = ?"
    + " AND mm.status = 'INPROGRESS'"
    + " LIMIT ? OFFSET ?"

}

export default missionSQL;
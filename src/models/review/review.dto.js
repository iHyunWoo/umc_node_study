export const getReviewResponseDTO = (id, member_name, store_name, body, score) => {
    return  {
        "id": id,
        "member_name": member_name,
        "store_name": store_name,
        "body": body,
        "score": score
    }
}
import request from "../utils/request"

export const fetchData= query =>{
    return request({
        url:'/api/table',
        method:'get',
        params:query
    })
}
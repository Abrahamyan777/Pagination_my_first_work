
export  const GET_POSTS = "GET_POSTS";

export  const   getPostAC = (data) => {
    return {
        type : GET_POSTS,
        payload: data
    }
}

export const GET_FOTOS = "GET_FOTOS";

export const getFotosAC = (foto) => {
    return {
        type: GET_FOTOS,
        payload : foto
    }
}

export const CHANGE_PAGE = "CHANGE_PAGE"

export const pageCountAC = (number) => {
    return {
        type : CHANGE_PAGE,
        payload: number
    }
}

export const CHANGE_LIMIT = "CHANGE_LIMIT"

export const changeLimitAC = (y) => {
    return{ 
        type: CHANGE_LIMIT,
        payload: y
    }
}
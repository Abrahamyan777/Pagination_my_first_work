import {CHANGE_LIMIT, CHANGE_PAGE, GET_FOTOS, GET_POSTS} from "../actionCreators/actionCreators";

const initialState = {
    posts : [],
    fotos : [],
    pageCount: 1,
    limitPage: 10,
    p : 1,
    l : 10
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS :
            return {
                ...state,
                posts: action.payload
            }
        case CHANGE_PAGE:
            return {
                ...state,
                pageCount: action.payload
            }
        case CHANGE_LIMIT : 
            return {
                ...state,
                limitPage: action.payload,
                pageCount : 1
            }
        case GET_FOTOS : 
            return {
                ...state,
                fotos: action.payload
            }
        default :
            return state
    }
}
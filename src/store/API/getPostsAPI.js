import {getPostAC, getFotosAC} from "../actionCreators/actionCreators";


export  const  getPostsAPI = (page,limit) => {

    return  async function  (dispatch){
        const  response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
        const data = await  response.json();
        dispatch(getPostAC(data))
        console.log(data);
        // console.log(data.length);
        // console.log(data);
    }
}

export const getFotosAPI = (p, l) => {

    return async function (dispatch) {
        const result = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${p}&_limit=${l}`)
        const  clection = await result.json();
        dispatch(getFotosAC(clection))
    }
}


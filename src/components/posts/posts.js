import { useDispatch, useSelector } from "react-redux";
import { getPostsAPI } from "../../store/API/getPostsAPI";
import { useEffect, useRef, useState } from "react";
import { pageCountAC } from "../../store/actionCreators/actionCreators";
import { changeLimitAC } from "../../store/actionCreators/actionCreators";
import css from './posts.module.css'

function UsersList() {

    const dispatch = useDispatch()

    const { posts, pageCount, limitPage } = useSelector(function b(state) { return state.postsReducer })

    // console.log(posts);
    // console.log(pageCount);
    // console.log(limitPage);

    let pagesCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // const bool = useRef(false)
    // console.log(bool.current);

    useEffect(() => {
        dispatch(getPostsAPI(pageCount, limitPage))
    }, [pageCount, limitPage])


    if (100 / limitPage === 5) {
        pagesCount = [1, 2, 3, 4, 5]
    } else if (100 / limitPage === 2) {
        pagesCount = [1, 2]
    }


    if (posts.length === 0) {

        return <h1>Loading...</h1>
    } else {

        return (   
              
            <div className={css.mainUl}>     
             <ul className="postsList">
                            { 
                                posts.map(({ id, title }) => {
                                    return <li key={id} className="postItem">
                                        {id}: {title}
                                    </li>
                                })
                            }
                </ul> 
                 <div className={css.postsStyle} >
                 {
                     pagesCount.map(number => {

                         return <button key={number}
                             onClick={() => dispatch(pageCountAC(number))}
                         >
                             {number}
                         </button>
                     })
                 }

                 <select
                     onChange={({ target }) => {
                         return dispatch(changeLimitAC(+target.value))
                     }}
                 >
                     <option>10</option>
                     <option>20</option>
                     <option>50</option>
                 </select>
             </div>       
            </div>
        )            
    }
}


export default UsersList
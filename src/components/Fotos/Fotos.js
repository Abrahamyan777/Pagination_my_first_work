import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getFotosAPI } from "../../store/API/getPostsAPI";
import css from "./Fotos.module.css"


function Fotos (){

   const dispatch = useDispatch()
   
   const {fotos, p, l} = useSelector(function b(state) { return state.postsReducer })
   console.log(fotos);
   console.log(p);
   console.log(l);

    useEffect(() => {
       dispatch(getFotosAPI(p, l))
    }, [l])
    

    return (
        <div className={css.fotosBlock} onScroll={(evt) => {
            console.log(evt);
            // if(evt.target.clientHeight > 300) {
                
            //     console.log("hi");
            // }
            
      }}>

              <ul className={css.fotosUl}  >
                            { 
                                fotos.map(({ id, url }) => {
                                    return <li key={id} className="postItem">
                                        <img alt="img" src=  {url}/>
                                    </li>
                                })
                            }
                </ul> 
            
        </div> 

           )
    }

export default Fotos


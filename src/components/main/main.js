import css from './main.module.css'
import {Route, Routes} from "react-router-dom";
import HiddenRegister from '../hiddenRegister/hiddenRegister'
import Posts from "../posts/posts";
import Fotos from '../Fotos/Fotos';

function Main (){
    return(
        <div className={css.main}>
            <Routes>
                    <Route path="/hiddenRegister" element={<HiddenRegister />}/>
                    <Route path="main" element={<HiddenRegister />}/>
                    <Route path="/posts" element={<Posts />}/>
                    <Route path="/fotos" element={<Fotos />}/>
            </Routes>
        </div>
        
    )
}
export default Main
import React, {useState} from 'react';
import Input from "../inputs/input";
import css from  './hiddenLogin.module.css'
import svg from '../images/arrow.svg'
import { NavLink} from "react-router-dom";
let HiddenLogin = () => {

    const [open , setOpen] = useState(false)

    function OpenLogin () {
        setOpen(!open)
    }


    return (
        <form className={open ? css.shownForm : css.hiddenForm}>
            <img className={open ? css.imageOpened : css.imageClosed} src={svg} onClick={OpenLogin}></img>
            <Input typeProps={'email'} placeholderProps={'Enter your email'}/>
            <Input typeProps={'password'} placeholderProps={'Enter your password'}/>
            
            <div className={css.regButtonsDiv}>
                <button className={css.regButtons}>Sign In</button> 
                <NavLink to='/hiddenRegister' className={css.signUp}>Sign Up</NavLink>
            </div>
                

        </form>
    );
};

export default HiddenLogin
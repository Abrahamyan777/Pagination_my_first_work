import css from './hiddenRegister.module.css'
import Input from "../inputs/input";


function HiddenRegister(){
    return(
        <div>
            <form className={css.form1}>
                <Input typeProps={'email'} placeholderProps={'Enter your email'}/>
                <Input typeProps={'Login'} placeholderProps={'Enter your Login'}/>
                <Input typeProps={'password'} placeholderProps={'Enter your password'}/>
            </form>
        </div>
    )
}
export default HiddenRegister
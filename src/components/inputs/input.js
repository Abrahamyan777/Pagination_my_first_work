import css from './input.module.css'
function Input({typeProps,placeholderProps}){
    return(
<input type={typeProps}  className={css.inputStyle} placeholder={placeholderProps}/>   
 )
}
export default Input

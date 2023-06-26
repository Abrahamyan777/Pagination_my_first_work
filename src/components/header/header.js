import css from './header.module.css'
import HeaderMenu from '../headerMenu/headerMenu';
function Header(){
    return(
        <div className={css.header}>
            <div>LOGO</div>
            <HeaderMenu/>
        </div>
    )
}
export default Header
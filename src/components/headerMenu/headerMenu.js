import css from './headerMenu.module.css'
import { NavLink} from "react-router-dom";

function HeaderMenu() {
    return(
        <ul className={css.list}>
            <li>
                <NavLink to='/'>
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink to='account' >
                    Account
                </NavLink>
            </li>
            <li>
                <NavLink to='blog'>
                    BLOG
                </NavLink>
            </li>
            <li>
                <NavLink to='fotos'>
                    Fotos
                </NavLink>
            </li>
            <li>
                <NavLink to='/posts'>
                    POSTS
                </NavLink>
            </li>
        </ul>
    )
}
export default HeaderMenu
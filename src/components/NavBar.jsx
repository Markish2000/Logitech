import {NavLink} from "react-router-dom"
import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"
import imgRecimad from "./logitechlogo.png"

const NavBar = () => {

    const navLinkClassName = (navData) =>
    navData.isActive ? 'btn btn-comprar' : '';

    return (
<div class="navbar bg-base-100 navbarcolor">
    <div class="navbar-start">
        <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="btn menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink className={navLinkClassName} to={'/'}><ItemListContainer greeting={'mouse'}/></NavLink></li>
            <li><NavLink className={navLinkClassName} to={'mousepads'}>mouse pads</NavLink></li>
            <li><NavLink className={navLinkClassName} to={'teclado'}>teclados</NavLink></li>
            <li><NavLink className={navLinkClassName} to={'volantes'}>volantes</NavLink></li>
            <li><NavLink className={navLinkClassName} to={'controles'}>controles</NavLink></li>
            <li><NavLink className={navLinkClassName} to={'audio'}>audio</NavLink></li>
            <li><NavLink className={navLinkClassName} to={'simuladoresDeVuelo'}>simuladores de vuelo</NavLink></li>
            </ul>
        </div>
        <a class="btn"><img src={imgRecimad} alt="Recimad" width="150px"/></a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
        <li><NavLink className={navLinkClassName} to={'/'}><ItemListContainer greeting={'mouse'}/></NavLink></li>
            <li><NavLink className={navLinkClassName} to={'mousepads'}>mouse pads</NavLink></li>
            <li><NavLink className={navLinkClassName} to={'teclado'}>teclados</NavLink></li>
            <li><NavLink className={navLinkClassName} to={'volantes'}>volantes</NavLink></li>
            <li><NavLink className={navLinkClassName} to={'controles'}>controles</NavLink></li>
            <li><NavLink className={navLinkClassName} to={'audio'}>audio</NavLink></li>
            <li><NavLink className={navLinkClassName} to={'simuladoresDeVuelo'}>simuladores de vuelo</NavLink></li>
        </ul>
    </div>
    <div className="navbar-end">
        <CartWidget/>
    </div>
</div>
)
}
export default NavBar
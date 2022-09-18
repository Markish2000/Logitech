import {NavLink} from "react-router-dom"
import CartWidget from "../CartWidget"
import imgRecimad from "../logitechlogo.png"
import DarkModeButton from "../DarkModeButton"

export const NavBar = () => {
    const navLinkclassName = ( navData ) =>
    navData.isActive ? 'btn btn-comprar' : '';

    return (
        <div className="navbar bg-base-100 navbarcolor">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink className={navLinkclassName} to={'/'}>inicio</NavLink></li>
                            <li><NavLink className={navLinkclassName} to={'mouse'}>mouse</NavLink></li>
                            <li><NavLink className={navLinkclassName} to={'mousepads'}>mouse pads</NavLink></li>
                            <li><NavLink className={navLinkclassName} to={'teclado'}>teclados</NavLink></li>
                            <li><NavLink className={navLinkclassName} to={'volantes'}>volantes</NavLink></li>
                            <li><NavLink className={navLinkclassName} to={'controles'}>controles</NavLink></li>
                            <li><NavLink className={navLinkclassName} to={'audio'}>audio</NavLink></li>
                            <li><NavLink className={navLinkclassName} to={'simuladoresDeVuelo'}>simuladores de vuelo</NavLink></li>
                        </ul>
                    </div>
                    <NavLink className="btn" to={'/'}><img src={imgRecimad} alt="Recimad" width="150px"/></NavLink>
                </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink className={navLinkclassName} to={'/'}>inicio</NavLink></li>
                    <li><NavLink className={navLinkclassName} to={'mouse'}>mouse</NavLink></li>
                    <li><NavLink className={navLinkclassName} to={'mousepads'}>mouse pads</NavLink></li>
                    <li><NavLink className={navLinkclassName} to={'teclado'}>teclados</NavLink></li>
                    <li><NavLink className={navLinkclassName} to={'volantes'}>volantes</NavLink></li>
                    <li><NavLink className={navLinkclassName} to={'controles'}>controles</NavLink></li>
                    <li><NavLink className={navLinkclassName} to={'audio'}>audio</NavLink></li>
                    <li><NavLink className={navLinkclassName} to={'simuladoresDeVuelo'}>simuladores de vuelo</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <DarkModeButton/>
                <CartWidget/>
            </div>
        </div>
    );
};
export default NavBar
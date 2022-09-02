import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"
import imgRecimad from "./logitechlogo.png"

const NavBar = () => {
    return (
<div class="navbar bg-base-100 navbarcolor">
    <div class="navbar-start">
        <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#"><ItemListContainer greeting={'mouse'}/></a></li>
                <li><a href="/pages/mousepads.html">mouse pads</a></li>
                <li><a href="/pages/teclados.html">teclados</a></li>
                <li><a href="/pages/auriculares.html">auriculares</a></li>
                <li><a href="/pages/volantes.html">volantes</a></li>
                <li><a href="/pages/controles.html">controles</a></li>
                <li><a href="/pages/audio.html">audio</a></li>
                <li><a href="/pages/simuladoresdevuelo.html">simuladores de vuelo</a></li>
            </ul>
        </div>
        <a href="#" class="btn"><img src={imgRecimad} alt="Recimad" width="150px"/></a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
            <li><a href="#"><ItemListContainer greeting={'mouse'}/></a></li>
            <li><a href="/pages/mousepads.html">mouse pads</a></li>
            <li><a href="/pages/teclados.html">teclados</a></li>
            <li><a href="/pages/auriculares.html">auriculares</a></li>
            <li><a href="/pages/volantes.html">volantes</a></li>
            <li><a href="/pages/controles.html">controles</a></li>
            <li><a href="/pages/audio.html">audio</a></li>
            <li><a href="/pages/simuladoresdevuelo.html">simuladores de vuelo</a></li>
        </ul>
    </div>
    <div class="navbar-end">
        <CartWidget/>
    </div>
</div>
    )
}
export default NavBar
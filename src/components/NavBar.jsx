import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"
import imgRecimad from "./Recimad-logo-1.png"

const NavBar = () => {
    return (
        <div className="divnavBar">
            <div className="divNavBarImg">
                <img src={imgRecimad} alt="Recimad"/>
            </div>
            <div className="divNavLateral">          
                <ul className="ulNavLateral">
                    <li className="liNavLateral"><ItemListContainer greeting={'INICIO'}/></li>
                    <li className="liNavLateral">NOSOTROS</li>
                    <li className="liNavLateral">PRODUCTOS</li>
                    <li className="liNavLateral">CONTACTO</li>
                </ul>
                <CartWidget/>
            </div>
        </div>
    )
}
export default NavBar
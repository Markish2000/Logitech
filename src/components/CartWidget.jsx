import { useContext } from "react";
import ProductContext from "../context/ProductContext";                       
import carrito from "./shopping-cart.png"

const CartWidget = () => {

    const productContext = useContext( ProductContext );

    const totalQuantity = () => {
        const totalesQuantity = productContext.products.map( product => product.quantity );
        let total = 0;
        totalesQuantity.forEach( e => total += e )
        return total
    }

    return (
        <div className="indicator">
            <img src={ carrito } alt="Carrito de compras" width="30px"/>
            <span className="badge badge-sm indicator-item">{ totalQuantity() }</span>
        </div>
    );
};
export default CartWidget
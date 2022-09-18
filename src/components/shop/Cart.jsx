import { useContext } from "react";
import ProductContext from "../../context/ProductContext";

export const Cart = () => {
    const productContext = useContext( ProductContext );

    const nose = () =>{
        console.log(productContext.products[0].title)
    }

    return (
        <div onClick={nose}>Cart</div>
    )
}

export default Cart
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";

const Cart = () => {
    const productContext = useContext( ProductContext );
    return (
        <div>                
            <figure><img src={ productContext.products[0].img } alt={ productContext.products[0].title }/></figure>
            <div className="card-body">
                <h2 className="card-title">{ productContext.products[0].title }</h2>
                <p>Precio: ${ productContext.products[0].price }</p>
            </div>
        </div>
    )
}

export default Cart
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import ItemCount from "../ItemCount"
import imgCart from "../shopping-cart.png"

const Cart = () => {
    const productContext = useContext( ProductContext );
    return (
        <div>
            <div className="cart_h1-flex">
                <img src={imgCart} alt="Carrito de compras" width="100px"/>
                <h1 className="cart-h1"><b>carrito de compras</b></h1>
                <img src={imgCart} alt="Carrito de compras" width="100px"/>
            </div>
            <div className="flex-cart">
                <div className="info-cart">
                    <p><b>Producto</b></p>
                    <div className="flex">
                        <img className="img-cart" src={ productContext.products[0].img } alt={ productContext.products[0].title }/>
                        <p className="card-title">{ productContext.products[0].title }</p>
                    </div>  
                </div> 
                <div className="info-cart">
                    <p className="prueba"><b>Precio unitario</b></p>
                    <p><b>${ productContext.products[0].price }</b></p>
                </div>
                <div className="info-cart">
                    <p className="prueba"><b>Cantidad</b></p>
                    <ItemCount/>
                </div>
                <div className="info-cart">
                    <p className="prueba"><b>SubTotal</b></p>
                    <p><b>${ productContext.products[0].price }</b></p>
                </div>
                <div className="info-cart">
                    <button className="btn btn-square btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Cart
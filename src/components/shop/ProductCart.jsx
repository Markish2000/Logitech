import { useState } from "react";
import ItemCount from "../ItemCount"

const ProductCart = ( { product, deleteProductAlert } ) => {
    const [ counter, setCounter ] = useState( product.quantity );

    const getTotal = ( price, quantity ) => {
        return price * quantity;
    }
    
    return (
    <div className="flex-cart">
        <div className="info-cart">
            <p><b>Producto</b></p>
            <div className="flex">
                <img className="img-cart" src={ product.img } alt={ product.title }/>
                <p className="card-title">{ product.title }</p>
            </div>  
        </div> 
        <div className="info-cart">
            <p className="prueba"><b>Precio unitario</b></p>
            <p><b>${ product.price }</b></p>
        </div>
        <div className="info-cart">
            <p className="prueba"><b>cantidad</b></p>
            <ItemCount quantity={ counter } product={ product }setCounter={ setCounter }/>
        </div>
        <div className="info-cart">
            <p className="prueba"><b>SubTotal</b></p>
            <p><b>${ getTotal( product.price, counter ) }</b></p>
        </div>
        <div className="info-cart">
            
            <button onClick={ () => deleteProductAlert( product ) } className="btn btn-square btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
    </div>
)
}
export default ProductCart
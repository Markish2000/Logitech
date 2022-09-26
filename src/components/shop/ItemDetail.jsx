import { useContext, useEffect, useState } from "react";
import ProductContext from "../../context/ProductContext";
import { NavLink, useParams } from "react-router-dom";
import {  doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ( { item } ) => {

    const { id: categoryId } = useParams()

    const [ product, setProduct ] = useState( [] )

    useEffect( () => {
        getProductByCategory()
    }, [] )

    const getProductByCategory = () => {
        const db = getFirestore()
        const productRef = doc( db , 'products', categoryId );
        getDoc( productRef ).then( snapshot => {
            setProduct( { id: snapshot.id, ...snapshot.data() } )
        })
    }
    const productContext = useContext( ProductContext );
    
    const addHandler = ( item ) => {
        productContext.addProduct(item)
    };
    
    return (
        <div className="flex-detail">
            <div>
                <img src={ product.img } alt={ product.title }/>
            </div>
            <div className="detail-border">
                <div className="pd-detail">
                    <p>Nuevo | {product.vendido} vendidos</p>
                    <h2 className="card-title">{ product.title }</h2>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                    </div>
                    <h3>Precio: ${ product.price }</h3>
                    <p>en 12x ${ Math.round(product.price / 12)}</p>
                    <div className="flex-detail">
                        <select className="select border-quanty max-w-xs">
                            <option disabled selected>Cantidad: {product.stock}</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <p>({ product.stock } disponibles)</p>
                    </div>
                    <NavLink to={'/cart'}><button onClick={ (  ) => { addHandler( product ) } } className="btn btn-comprar btn-detail">comprar</button></NavLink>
                </div>
            </div>
        </div>
    );
};
export default ItemDetail
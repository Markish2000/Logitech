import { useContext, useEffect, useState } from "react";
import ProductContext from "../../context/ProductContext";
import ItemCount from "../ItemCount";
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
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={ product.img } alt={ product.title }/></figure>
                <div className="card-body">
                    <h2 className="card-title">{ product.title }</h2>
                    <p>Precio: ${ product.price }</p>
                    <div className="card-actions justify-end">
                        <ItemCount/>
                        <NavLink to={'/cart'}><button onClick={ (  ) => { addHandler( product ) } } className="btn btn-comprar">comprar</button></NavLink>
                    </div>
                </div>
            </div>
    );
};
export default ItemDetail
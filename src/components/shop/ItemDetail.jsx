import { useContext, useEffect, useState } from "react";
import ProductContext from "../../context/ProductContext";
import { NavLink, useParams } from "react-router-dom";
import {  doc, getDoc, getFirestore } from "firebase/firestore";
import imgEnvio from "../../img/envio.png";
import imgDevolver from "../../img/devolver.png";
import imgCompraProtegida from "../../img/compraprotegido.png";

const ItemDetail = ( { item } ) => {

    const { id: categoryId } = useParams();

    const [ product, setProduct ] = useState( [] );

    useEffect( () => {
        getProductByCategory()
    }, [] );

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
                    <p className="nuevo-vendidos-margin"><b>Nuevo | {product.solds} vendidos</b></p>
                    <h2 className="card-title"><b>{ product.title }</b></h2>
                    <p className="masvendidos-margin"><b className="bestseller">más vendido</b> <b>{product.bestseller}º en {product.category}</b></p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                    </div>
                    <h3><b className="price-fs">${ product.price }</b></h3>
                    <p><b className="quotas-fs">en 12x ${ Math.round(product.price / 12)}</b></p>
                    <div className="envio_detail">
                        <img src={imgEnvio} alt="Envio"/>
                        <p className="envio_detail-margin"><b>Envíos gratis a todo el país</b></p>
                    </div>
                    <div className="envio_detail">
                        <img src={imgDevolver} alt="Devolución gratis"/>
                        <p className="envio_detail-margin"><b className="colorazul">Devolución gratis.</b> <b>Tenés 30 días desde que lo recibís.</b></p>
                    </div>
                    <div className="envio_detail">
                        <img src={imgCompraProtegida} alt="Compra protegida"/>
                        <p className="envio_detail-margin"><b className="colorazul">Compra protegida, </b> <b>recibí el producto que esperabas o te devolvemos tu dinero.</b></p>
                    </div>
                    <div className="flex-contador">
                        <select className="select border-quanty max-w-xs">
                            <option disabled selected>Cantidad: {product.stock}</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <p className="dis-contador">({ product.stock } disponibles)</p>
                    </div>
                    <NavLink to={'/cart'}><button onClick={ (  ) => { addHandler( product ) } } className="btn btn-comprar btn-detail">agregar al carrito</button></NavLink>
                </div>
            </div>
        </div>
    );
};
export default ItemDetail
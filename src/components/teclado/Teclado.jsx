import { useState, useEffect } from "react";
import productJson from "../../teclados.json";
import ProductListTeclado from "./ProductListTeclado";
import imgTeclado from "../tecladobanner.webp";

export const Teclado = () => {
    const [ product, setProduct ] = useState( [] );

    const getProduct = ( data, time ) => 
        new Promise( ( resolve, reject ) => {
            setTimeout( () => {
                if ( data ) {
                    resolve( data );
                } else {
                    reject( "Error" );
                }
            }, time );
        });

        useEffect( () => {
            getProduct( productJson, 2000 )
                .then( ( res ) => {
                    setProduct( res );
                })
                .catch( ( err ) => console.log( err, ":no hay productos" ) )
        }, [] );

    return (
        <div>
            <img src={ imgTeclado }/>
            <ProductListTeclado product={ product }/>
        </div>
    );
};
export default Teclado
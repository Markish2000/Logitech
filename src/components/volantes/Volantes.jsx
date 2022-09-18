import { useState, useEffect } from "react";
import productJson from "../../volantes.json";
import ProductList from "./ProductListVolantes";
import imgTeclado from "../volantesbanner.webp";

export const Volantes = () => {
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
        }, []);

    return (
        <div>
            <img src={ imgTeclado }/>
            <ProductList product={ product }/>
        </div>
    );
};
export default Volantes
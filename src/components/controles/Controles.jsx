import { useState, useEffect } from "react";
import productJson from "../../controles.json";
import imgControles from "../controlesbanner.webp";
import ProductListControles from "./ProductListControles";

export const Controles = () => {
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
            <img src={ imgControles } alt="Control"/>
            <ProductListControles product={ product }/>
        </div>
    );
};
export default Controles
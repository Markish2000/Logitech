import { useState, useEffect} from "react";
import productJson from "../../mouse.json";
import imgMouse from "../mousebanner.webp";
import ProductListMouse from "./ProductListMouse";

const Mouse = () => {
    const [ product, setProduct ] = useState( [] )

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
                    setProduct(res);
                } )
                .catch( ( err ) => console.log( err, ":no hay productos" ) )
        }, [] );

    return (
        <div>
            <img src={ imgMouse } alt="Mouse"/>
            <ProductListMouse product={ product }/>
        </div>
    );
};
export default Mouse
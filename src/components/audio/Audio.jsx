import { useState, useEffect } from "react";
import productJson from "../../audio.json";
import ProductList from "./ProductListAudio";
import imgAudio from "../audiobanner.webp";

const Audio = () => {
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
                    setProduct( res );
                })
                .catch( ( err ) => console.log(err, ":no hay productos"))
        }, []);

    return (
        <div>
            <img src={ imgAudio } alt="Audio"/>
            <ProductList product={ product }/>
        </div>
    )
}
export default Audio
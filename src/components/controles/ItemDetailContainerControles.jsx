import { useEffect, useState } from "react";
import ItemDetail from "../shop/ItemDetail";
import productJson from "../../controles.json";
import { useParams } from "react-router-dom";

const ItemDetailContainerControles = () => {
    const [ item, setItem ] = useState( {} );
    const { id } = useParams();

    useEffect( () => {
        getItem().then( data => {
            if ( data ) {
                setItem( data )
            }
        })
    }, [] );
    

    const getItem = () => { 
        return new Promise( resolve => {
            setTimeout( () => {
                resolve( productJson.find( product => product.id == id) )
            }, 2000 );
        });
    };

    return (
        <ItemDetail item={ item }/>
    );
};
export default ItemDetailContainerControles
import { useEffect, useState } from "react";
import ItemDetail from "../shop/ItemDetail";
import productJson from "../../mouse.json";
import { useParams } from "react-router-dom";

export const ItemDetailContainerMouse = () => {
    const [ item, setItem ] = useState( {} );
    const { id } = useParams();

    useEffect( () => {
        getItem().then( data => {
            if ( data ) {
                setItem( data) 
                return data
            };
        });
    }, [] );

    const getItem = () => { 
        return new Promise( resolve => {
            setTimeout( () => {
                resolve( productJson.find( product => product.id == id) )
            }, 2000 );
        });
    };

    return (
        <ItemDetail item={item}/>
    );
};
export default ItemDetailContainerMouse
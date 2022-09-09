import { useEffect, useState } from "react";
import productJson from "../../mousepad.json";
import { useParams } from "react-router-dom";
import ItemDetail from "../shop/ItemDetail";

function ItemDetailContainerMousePads() {

    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getItem().then( data => {
            if (data) {
                setItem(data)
            }
        })
    }, [])
    

    const getItem = () => { 
        return new Promise( resolve => {
            setTimeout(() => {
                resolve( productJson.find( product => product.id == id) )
            }, 2000);
        })
    }

    return (
        <ItemDetail item={item}/>
    )
}
export default ItemDetailContainerMousePads
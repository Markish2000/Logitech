import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"

export const ProductCard = ( {category, price} ) => {
    return (
        <div>
            <h3>Categoria: {category}</h3>
            <h3>Precio: ${price}</h3>
        </div>
    )
}

const ProductContainer = () => {

    const [ products, setProducts ] = useState( [] );

    useEffect(() => {
        let categories = products.map( ( item ) => item.category )
        let noRepeat = categories.filter( ( item,index )=>{
            return categories.indexOf(item) === index;
        })
    }, [products])
    

    useEffect( () => {
        getProducts();
    }, [] );
    
    const getProducts = () => { 
        const db = getFirestore()
        const productCollection = collection( db , 'products' );
        getDocs( productCollection ).then( snapshot => {
            setProducts(snapshot.docs.map(d => ({id: d.id, ...d.data()})))
        })
    }

    return (
        <>
            { products.map( p => <ProductCard key={p.id} {...p}/> ) }
        </>
    )
}
export default ProductContainer
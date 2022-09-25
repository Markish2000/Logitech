import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useEffect } from "react"
import { useState } from "react"
import { NavLink, useParams } from "react-router-dom"

const Category = () => {

    const { id: categoryId } = useParams()

    const [ products, setProducts ] = useState( [] )

    useEffect( () => {
        getProductByCategory()
    }, [])

    const getProductByCategory = () => {
        const db = getFirestore()
        const productCollection = collection( db , 'products' );
        const q = query(productCollection, where('category', '==', categoryId) )
        getDocs( q ).then( snapshot => {
            setProducts( snapshot.docs.map( d => ({id: d.id, ...d.data()})))
        })
    }
    
    return (
        <>
            { products.map( p => 
                <li key={ p.id }>
                    <NavLink to={ `${ p.id }` }> 
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={ p.img } alt={ p.title }/></figure>
                            <div className="card-body">
                                <h2 className="card-title">{ p.title }</h2>
                                <p>Precio: ${ p.price }</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-comprar">más información</button>
                            </div>
                        </div>
                    </NavLink>
                </li>)}
        </>
    )
}
export default Category
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

const Links = () => {

    const [products, setProducts] = useState( [] );

    useEffect( () => {
            const db = getFirestore()
            const productCollection = collection( db , 'products' );
            getDocs( productCollection ).then( snapshot => {
                setProducts( snapshot.docs.map(d => ( { id: d.id, ...d.data() } ) ) )
            })
    }, [] );

    return (
        <div>
            { products.map(c => <NavLink key={c.id} to={`${c.category}`}>{c.category}</NavLink>)}
        </div>
    )
}
export default Links
import {NavLink} from "react-router-dom"
import CartWidget from "../CartWidget"
import imgRecimad from "../logitechlogo.png"
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const NavBar = () => {
    const navLinkclassName = ( navData ) =>
    navData.isActive ? 'btn btn-comprar' : '';
    const [ products, setProducts ] = useState( [] );
    const [ categories, setCategories ] = useState( [] );

    useEffect( () => {
        let categories = products.map( ( item ) => item.category )
        let noRepeat = categories.filter( ( item,index )=>{
            return categories.indexOf( item ) === index;
        })
        setCategories( noRepeat )
    }, [ products ] )

    useEffect( () => {
        getProducts();
    }, [] );
    
    const getProducts = () => { 
        const db = getFirestore()
        const productCollection = collection( db , 'products' );
        getDocs( productCollection ).then( snapshot => {
            setProducts( snapshot.docs.map( d => ( { id: d.id, ...d.data() } ) ) )
        } )
    };


    return (
        <div className="navbar bg-base-100 navbarcolor">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink className={navLinkclassName} to={'/'}>inicio</NavLink></li>
                    { categories.map(c => <li key={ c }><NavLink className={navLinkclassName} to={`${ c }`}>{ c }</NavLink></li>)}
                        </ul>
                    </div>
                    <NavLink className="btn" to={'/'}><img src={imgRecimad} alt="Recimad" width="150px"/></NavLink>
                </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink className={navLinkclassName} to={'/'}>inicio</NavLink></li>
                    { categories.map(c => <li key={ c }><NavLink className={navLinkclassName} to={`${ c }`}>{ c }</NavLink></li>)}
                </ul>
            </div>
            <div className="navbar-end">
                <CartWidget/>
            </div>
        </div>
    );
};
export default NavBar
import { createContext, useContext, useState } from "react";
import swal from "sweetalert";

const ProductContext = createContext();

export const useTaxtContext = () => useContext( ProductContext );

export const ProductContextProvider = ( { children } ) => {
    const [ products, setProducts ] = useState( [] );

    const exists = ( product ) => {
        products.some( ( sought ) => sought.title === product.title )
    };

    const addProduct = ( product ) => {
        if( exists( product ) ) {
            return swal.fire( "El producto ya existe en el carrito." )
        };

        const newProduct = { ...product };
        setProducts( [ ...products, newProduct ] );
        swal.fire( "El producto se agregó correctamente al carrito." );
    };

    const cleanProduct = ( product ) => {
        const cleanProduct = products.filter(sought => sought.id !== product.id);
        return setProducts( cleanProduct );
    };

    const emptyCart = () => {
        setProducts( [] );
    };

    const earrings = () => {
        const earrings = products.reduce(
            ( accum, product ) => ( product.state === false ? accum + 1 : accum ), 0 );
            return earrings;
    };

    const updateState = ( product, state ) => {
        const copyProduct = [ ...products ];

        const updateCart = copyProduct.map( ( current ) => {
            if ( current.id === product.id ) {
                return { ...current, state: state ? false : true }
            } else {
                return current;
            };
        });
    };

    const context = {
        products, 
        exists, 
        addProduct, 
        cleanProduct, 
        emptyCart, 
        earrings, 
        updateState
    };

    return (
        <ProductContext.Provider value={ context }> 
            { children } 
        </ProductContext.Provider>
    );
};

export default ProductContext
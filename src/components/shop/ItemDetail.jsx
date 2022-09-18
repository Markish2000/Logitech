import { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import ItemCount from "../ItemCount";
import { NavLink } from "react-router-dom";

const ItemDetail = ( { item } ) => {
    const productContext = useContext( ProductContext );

    const addHandler = ( item ) => {
        productContext.addProduct(item)
    };

    return (
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={ item.img } alt={ item.title }/></figure>
                <div className="card-body">
                    <h2 className="card-title">{ item.title }</h2>
                    <p>Precio: ${ item.price }</p>
                    <div className="card-actions justify-end">
                        <ItemCount/>
                        <NavLink to={'/cart'}><button onClick={ (  ) => { addHandler( item ) } } className="btn btn-comprar">comprar</button></NavLink>
                    </div>
                </div>
            </div>
    );
};
export default ItemDetail
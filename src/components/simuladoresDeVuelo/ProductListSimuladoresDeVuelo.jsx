import { Link } from "react-router-dom";
import Product from "../Product";

export const ProductListSimuladoresDeVuelo = ( { product } ) => {
    return (
        <div className="gd">
            { product.length ? (
                product.map( ( product ) => <Link to={ `detallesSimuladoresDeVuelo/${ product.id }` }><Product key={ product.id } product={ product }/></Link> )
            ) : (
                <h2>Cargando...</h2>
            )};
        </div>
    );
};
export default ProductListSimuladoresDeVuelo
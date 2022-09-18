import { Link } from "react-router-dom";
import Product from "../Product";

export const ProductListAudio = ( product ) => {
    return (
        <div className="gd">
            {product.length ? (
                product.map( ( product ) => <Link to={ `detallesAudio/${ product.id }` }><Product key={ product.id } product={ product }/></Link>)
            ) : (
                <h2>Cargando...</h2>
            )};
        </div>
    );
};
export default ProductListAudio
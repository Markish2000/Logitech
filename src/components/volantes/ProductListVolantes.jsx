import { Link } from "react-router-dom";
import Product from "../Product";

function ProductListVolantes({product}) {
    return (
        <div className="gd">
            {product.length ? (
                product.map((product) => <Link to={`detallesVolantes/${product.id}`}><Product key={product.id} product={product}/></Link>)
            ) : (
                <h2>Cargando...</h2>
            )}
        </div>
    );
};
export default ProductListVolantes
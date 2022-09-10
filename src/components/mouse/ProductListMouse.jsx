import { Link } from "react-router-dom";
import Product from "../Product";

function ProductListMouse({product}) {
    return (
        <div className="gd">
            {product.length ? (
                product.map((product) => <Link to={`detallesMouse/${product.id}`}><Product key={product.id} product={product}/></Link>)
            ) : (
                <h2>Cargando...</h2>
            )}
        </div>
    );
};
export default ProductListMouse
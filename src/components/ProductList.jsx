import Product from "./Product"

function ProductList({product}) {
    return (
        <div>
            {product.length ? (
                product.map((product) => <Product key={product.id} product={product}/>)
            ) : (
                <h2>Cargando...</h2>
            )}
        </div>
    );
};
export default ProductList
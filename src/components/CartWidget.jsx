import carrito from "./shopping-cart.png"

export const CartWidget = () => {
    return (
        <div>
            <a className="btn"><img src={ carrito } alt="Carrito de compras" width="30px"/></a>
        </div>
    );
};
export default CartWidget
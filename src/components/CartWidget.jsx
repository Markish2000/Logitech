import carrito from "./shopping-cart.png"

function CartWidget() {
    return (
        <div>
            <a href="#" className="btn"><img src={carrito} alt="Carrito de compras" width="30px"/></a>
        </div>
    )
}
export default CartWidget
import carrito from "./shopping-cart.png"

function CartWidget() {
    return (
        <div>
            <img src={carrito} alt="Carrito de compras" className='imgCarritoDeCompras'/>
        </div>
    )
}
export default CartWidget
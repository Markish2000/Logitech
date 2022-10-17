import { useContext } from "react";
import Swal from "sweetalert2";
import ProductContext from "../../context/ProductContext";
import imgCart from "../shopping-cart.png"
import Order from "./Order";
import ProductCart from "./ProductCart";

const Cart = () => {
    const productContext = useContext( ProductContext );

    const totalPrice = () => {
        const totalesPrice = productContext.products.map( product => product.price * product.quantity );
        let total = 0;
        totalesPrice.forEach( e => total += e )
        return total
    }

    const deleteProductAlert = ( product ) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: '¿Estás seguro que quieres borrar este producto del carrito de compras?',
            text: "¡Este proceso no es reversible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                productContext.cleanProduct( product )
            swalWithBootstrapButtons.fire(
                '¡Borrado!',
                'El producto ha sido borrado del carrito de compras.',
                'success'
            )
            } else if (
            result.dismiss === Swal.DismissReason.cancel
            ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                '¡Sigue comprando!',
                'error'
            )
            }
        })
    }

    return (
        <>
            <div className="cart_h1-flex">
                <img src={imgCart} alt="Carrito de compras" width="100px"/>
                <h1 className="cart-h1"><b>carrito de compras</b></h1>
                <img src={imgCart} alt="Carrito de compras" width="100px"/>
            </div>
            { 
                productContext.products.map( product => 
                    <ProductCart key={ product.id } product={ product } deleteProductAlert={ deleteProductAlert }/>
                )
            }
            <p className="p__total"><b>Total: { totalPrice() }</b></p>
            <Order/>
    </>
    )
}
export default Cart
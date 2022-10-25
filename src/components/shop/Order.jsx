import { useContext, useState } from "react"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import ProductContext from "../../context/ProductContext"

const Order = () => {

    
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [orderId, setOrderId] = useState()
    
    const productContext = useContext( ProductContext );

    const deleteProduct = () =>{
        productContext.emptyCart();
    }

    const buttonForm = () => {
        sendOrder()
        deleteProduct()
        localStorage.setItem( 'products', JSON.stringify( deleteProduct ));
        localStorage.setItem( 'products', JSON.stringify( [] ));
    }

    const saveName = ( event ) => {
        setName(event.target.value)
    }

    const saveLastName = ( event ) => {
        
        setLastName(event.target.value)
    }

    const saveEmail = ( event ) => {
        setEmail(event.target.value)
    }

    const saveNumber = ( event ) => {
        setNumber(event.target.value)
    }

    const refreshWeb = () => {
        window.location.reload()
    }

    const sendOrder = ( ) => {
        const order = {
            buyer: { name: { name } , phone: { number } , email: { email } },
            item: [ { name: [product.name], price:  100 , quantity: 1 } ],
            total: 100
        };
        const db = getFirestore();
        const ordersCollection = collection( db, "orders" );

        addDoc( ordersCollection, order ).then( ( { id } ) => setOrderId( id ) );
    };

    return(   
        <>
            <div className="finalizar-compra-div">
                <label htmlFor="my-modal-3" className="btn finalizar__compra__formu">finalizar compra</label>
            </div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="section__formulario__input">
                        <h2 className="section__formulario__input__h4">Formulario de compra</h2>
                        <input className="section__formulario__input--border" onChange={ saveName }  value={ name } type="text" name="nombres" id="nombres" placeholder="Ingrese su nombre"/>
                        <input className="section__formulario__input--border" onChange={ saveLastName }  value={ lastName } type="text" name="apellidos" id="apellidos" placeholder="Ingrese su apellido"/>
                        <input className="section__formulario__input--border" onChange={ saveEmail }  value={ email } type="email" name="correo" id="correo" placeholder="Ingrese su correo"/>
                        <input className="section__formulario__input--border" onChange={ saveNumber }  value={ number } type="number" name="numero" id="numero" placeholder="Ingrese su número de celular"/>
                        <label htmlFor="my-modal-4" className="btn section__formulario__input__boton" onClick={ buttonForm } type="submit" name="Finalizar compra" value="Finalizar compra">finalizar compra</label>
                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative modal-id">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className="h1-modal-id"><b>¡Has completado la compra!</b></h1>
                    <h2 className="h2-modal-id"><b>Tú id de compra es: {orderId}</b></h2>
                        <label onClick={ refreshWeb } htmlFor="my-modal-3" className="btn section__formulario__input__boton" type="submit" name="ok" value="ok">ok</label>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Order
import { useState } from "react"
import { addDoc, collection, getFirestore } from "firebase/firestore"

const Order = () => {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [orderId, setOrderId] = useState()

    const saveName = ( event ) => {
        setName(event.target.value)
    }

    const saveLastName = ( event ) => {
        setLastName(event.target.value)
    }

    const saveEmail = ( event ) => {
        setEmail(event.target.value)
        console.log(validateEmail(event.target.value))
    }

    const saveNumber = ( event ) => {
        setNumber(event.target.value)
    }

    const sendOrder = ( ) => {
        const order = {
            buyer: { name: { name } , phone: { number } , email: { email } },
            item: [ { name: "Mousito", price: 100, quantity: 1} ],
            total: 100
        };
        const db = getFirestore();
        const ordersCollection = collection( db, "orders" );

        addDoc( ordersCollection, order ).then( ( { id } ) => setOrderId( id ) );
    };

    const validateEmail = ( email ) => {
        const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        return regex.test( email )
    }

    return(   
        <>
            <label htmlFor="my-modal-3" className="btn modal-button">finalizar compra</label>
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
            <p className="section__formulario__input__p"> <input className="section__formulario__input__check" type="checkbox" name="acepta" value="1"/>Estoy de acuerdo con los Términos y Condiciones.</p>
            <input htmlFor="my-modal-3" className="btn section__formulario__input__boton" onClick={ sendOrder } type="submit" name="Finalizar compra" value="Finalizar compra"/>
        </div>
    </div>
    </div>

    <div className="flex-formu">

    </div>
    </>)
}
export default Order
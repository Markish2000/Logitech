const Saludo = ( {name, lastname, fn, children} ) => {

    if (fn) {
        fn()
    }

    return (
        <>
        <h1>¡Saludos {name} {lastname}!</h1>
        {children}
        </>
        )
}
export default Saludo
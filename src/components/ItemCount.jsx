import { useState } from "react";

const ItemCount = () => {
    const [ counter, setCounter ] = useState( 1 );
    const [ viewImput, setViewImput ] = useState( false );

    const handleClickAdd = () => {
        setCounter( counter + 1 )
        if ( counter + 1 >= 5) {
            setViewImput( true )
        }
    };

    const handleClickDelete = () => {
        if ( counter > 1 ) {
            setCounter( counter - 1 )
        };
    };

    const handleChangeCounter = ( event ) => {
        setCounter( event.target.value )
    };

    if (viewImput) {
        return (
            <>
            <input type="number" min="6" onChange={ handleChangeCounter }/>
            <h3>{ counter }</h3>
            </>
        )
    } else {
        return (
            <div className="btn-group">
                    <button onClick={ handleClickDelete } className="btn btn-comprar">-</button>
                    <p className="contador">{ counter }</p>
                    <button onClick={ handleClickAdd } className="btn btn-comprar">+</button>
            </div>
        )
    };
};
export default ItemCount
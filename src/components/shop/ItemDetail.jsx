function ItemDetail( {item} ) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={item.img} alt="Mouse" /></figure>
        <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>Precio: ${item.price}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-comprar">comprar</button>
            </div>
        </div>
    </div>
    )
}
export default ItemDetail
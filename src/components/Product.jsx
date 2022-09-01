function Product(title, img, price) {
    return (
        <article>
            <h3>{title}</h3>
            <img src={img} alt="Img" />
            <h4>{price}</h4>
        </article>
    )
}
export default Product
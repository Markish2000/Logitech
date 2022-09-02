import { useState, useEffect } from "react";
import productJson from "../mouse.json";
import ProductList from "./ProductList";

function RecimadContainer() {
    const [product, setProduct] = useState([])

    const getProduct = (data, time) => 
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject("Error");
                }
            }, time);
        });

        useEffect(() => {
            getProduct(productJson, 3000)
                .then((res) => {
                    setProduct(res);
                })
                .catch((err) => console.log(err, ":no hay productos"))
        }, []);

return (
    <div>
        <ProductList product={product}/>
    </div>
)
}
export default RecimadContainer
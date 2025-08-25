import "./productlist.css"
import Product from "../product/Product"

function ProductList({ products, addToCart }) {


    return (
        <div className="product-list">
            {products.map((p) => (
                <Product key={p.id} product={p} addToCart={addToCart} />
            ))}
        </div>
    )
}

export default ProductList
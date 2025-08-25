import "./productlist.css"
import Product from "../product/Product"

function ProductList({ products }) {


    return (
        <div className="product-list">
            {products.map((p) => (
                <Product key={p.id} product={p} />
            ))}
        </div>
    )
}

export default ProductList
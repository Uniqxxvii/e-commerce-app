import "./product.css"

function Product({ product }) {


    return (
        <div className="product">
            <img className="product-image" src={product.image} alt={product.title} />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">Add to cart</button>
        </div>
    )
}

export default Product
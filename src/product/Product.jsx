import "./product.css"

function Product({ product, addToCart }) {


    return (
        <div className="product">
            <img className="product-image" src={product.image} alt={product.title} />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">{product.price}</p>
            <button 
                className="add-to-cart"
                onClick={() => addToCart(product)}
            >Add to cart</button>
        </div>
    )
}

export default Product
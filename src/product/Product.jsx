import "./product.css"

function Product({  }) {


    return (
        <div className="product">
            <img className="product-image" src="" alt="icon" />
            <h2 className="product-title">Title</h2>
            <p className="product-price">price</p>
            <button className="add-to-cart">Add to cart</button>
        </div>
    )
}

export default Product
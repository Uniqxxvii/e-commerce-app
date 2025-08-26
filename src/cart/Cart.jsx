import "./cart.css"

function Cart({ cart, removeFromCart, isCartOpen, toggleCart }) {

    return (
        <div className={`cart ${isCartOpen ? "open" : ""}`}>
           <h2 className="cart-title">Your Cart</h2>
           <button className="cart-close" onClick={toggleCart}>×</button>
           <ul className="cart-items">
            {cart.length === 0 ? (<li className="cart-empty">Cart is empty</li>
            ) : (
                cart.map((item, index) => (
                    <li key={index} className="cart-item">
                        {item.title} - ${item.price}
                        <button 
                            className="remove-from-cart"
                            onClick={() => removeFromCart(index)}
                        >remove</button>
                    </li>
                ))
            )}
           </ul>
        </div>
    )
}

export default Cart
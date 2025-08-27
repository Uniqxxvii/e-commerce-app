import "./cart.css"

function Cart({ cart, removeFromCart, isCartOpen, toggleCart, increaseQty, decreaseQty }) {

    return (
        <aside className={`cart ${isCartOpen ? "open" : ""}`}>
           <h2 className="cart-title">Your Cart</h2>
           <button className="cart-close" onClick={toggleCart}>×</button>
           <ul className="cart-items">
            {cart.length === 0 ? (<li className="cart-empty">Cart is empty</li>
            ) : (
                cart.map((item) => (
                    <li key={item.id} className="cart-item">
                        <div className="cart-info">
                            <span className="cart-title-text">{item.title}</span>
                            <span className="cart-price">${item.price}</span>
                        </div>
                        <div className="cart-controls">
                            <span>{item.qty}</span>
                            <button 
                                className="button" 
                                onClick={() => increaseQty(item.id)}
                            >+</button>
                            <button 
                                className="button" 
                                onClick={() => decreaseQty(item.id)}
                            >-</button>
                            <button 
                                className="remove-from-cart"
                                onClick={() => removeFromCart(item.id)}
                            >Remove</button>
                        </div>
                    </li>
                ))
            )}
           </ul>
        </aside>
    )
}

export default Cart
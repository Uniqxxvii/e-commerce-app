import { useState } from 'react'
import './App.css'
import Header from "./header/Header"
import ProductList from "./productlist/ProductList"
import Cart from "./cart/Cart"

function App() {
  const [products, setProducts] = useState([
    { id: 1, title: "Laptop", price: 999, image: "https://placeholder.com/1" },
    { id: 2, title: "Phone", price: 499, image: "https://placeholder.com/2" },
    { id: 3, title: "Headphones", price: 199, image: "https://placeholder.com/3" }
  ])

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  
  return (
    <div className="app">
      <Header />
      <ProductList 
        products={products}
        addToCart={addToCart} 
      />
      <Cart 
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  )
}

export default App
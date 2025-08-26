import { useState, useEffect } from 'react'
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

  const [isCartOpen, setIsCartOpen] = useState(false)

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }
  
  return (
    <div className="app">
      <Header  
        toggleCart={toggleCart}
      />
      <ProductList 
        products={products}
        addToCart={addToCart} 
      />
      {isCartOpen && <Cart 
        cart={cart}
        removeFromCart={removeFromCart}
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
      />}
    </div>
  )
}

export default App
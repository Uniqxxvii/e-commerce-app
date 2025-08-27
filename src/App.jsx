import { useState, useEffect } from 'react'
import Header from "./header/Header"
import ProductList from "./productlist/ProductList"
import Cart from "./cart/Cart"

function App() {
  const [products, setProducts] = useState([
    { id: 1, title: "Laptop", price: 999, image: "https://placeholder.com/1" },
    { id: 2, title: "Phone", price: 499, image: "https://placeholder.com/2" },
    { id: 3, title: "Headphones", price: 199, image: "https://placeholder.com/3" },
  ])

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id)
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      } else {
        return [...prevCart, { ...product, qty: 1}]
      }
    })
  }

  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    )
  }

  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0)
    )
  }

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().startsWith(searchTerm.toLowerCase()) 
  )
  
  return (
    <div className="app">
      <Header  
        toggleCart={toggleCart}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      <ProductList 
        products={filteredProducts}
        addToCart={addToCart} 
      />
      <Cart 
        cart={cart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeFromCart={removeFromCart}
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
      />
    </div>
  )
}

export default App
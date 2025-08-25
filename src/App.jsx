import { useState } from 'react'
import './App.css'
import Header from "./header/Header"
import ProductList from "./productlist/ProductList"

function App() {
  
  return (
    <div className="app">
      <Header />
      <ProductList />
    </div>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import CartBox from './Components/CartBox/CartBox'
import ProductsBox from './Components/ProductsBox/ProductsBox'

function App() {
  const [qty1, setQty1] = useState(0);
  const [qty2, setQty2] = useState(0);
  const [qty3, setQty3] = useState(0);
  const [products, setProducts] = useState([
    { id: 1, name: "Product- 1", price: 100 },

    { id: 2, name: "Product - 2", price: 200 },

    { id: 3, name: "Product - 3", price: 300 },
  ])
  return (
    <div className="app">
      <ProductsBox qty1={qty1} setQty1={setQty1} qty2={qty2} setQty2={setQty2} qty3={qty3} setQty3={setQty3} />
      <CartBox qty1={qty1} qty2={qty2} qty3={qty3} />
    </div>
  )
}

export default App

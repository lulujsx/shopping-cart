import { products } from "./mocks/products.json"
import { Products } from "./components/Products"
import { useState } from "react"
import { Header } from "./components/Header"

function App() {

  const [filters,setFilters] =useState({
    category: "all",
    minPrice: 0
  })

  const filterProducts = (products) =>{
    return products.filter(product =>{
        return(
            product.price >= filters.minPrice && 
            (
                filters.category === "all" || product.category == filters.category
            )
        )
    })
  }

const filteredProducts = filterProducts(products)
  

  return (
    <>
      <h1>Shopping Cart 🛒</h1>
      <Header/>
      <Products products={filteredProducts}/>
    </>
  )
}

export default App

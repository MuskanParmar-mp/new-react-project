import { Route, Routes } from "react-router-dom"
import { useState } from "react";
import Layout from "./Layout"


import Sign from "./Sign"
import Login from "./Login"
import Home from "./Home"
import Shop from "./Shop"
import HairCare from "./HairCare"
import BestSellers from "./BestSellers";
import BabyCare from "./BabyCare";
import BodyCare from "./BodyCare";
import CRUD from "./CRUD";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import Counter from "./Counter";
import Uneventone from "./Uneventone";




function App(){

  const [cart, setCart] = useState([]);


  return(
    <>
     <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/" element={ <Layout cart={cart}/>} >

      <Route path="/" element={<Home/>} /> 
      <Route path="/shop" element={<Shop/>} /> 
  
      <Route path="/bestseller" element={<BestSellers />} />
      <Route path="/babycare" element={<BabyCare />} />
      <Route path="/bodycare" element={<BodyCare />} />
      <Route path="/haircare" element={<HairCare/>} />
      <Route path="/crud" element={<CRUD />} />
      <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} />} />
      <Route path="/uneventone" element={<Uneventone/>} />
      
      </Route>
     </Routes>

 

    
    </>
  )
}
export default App
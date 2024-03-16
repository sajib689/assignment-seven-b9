import { useState } from "react"
import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Navbar/Navbar"
import Products from "./Components/Products/Products"
import SideBar from "./Components/SideBar/SideBar"
import Title from "./Components/Title/Title"


function App() {
  const [cooks, setCooks] = useState([])
  const handleCook = cook => {
    const newCoookings = [...cooks, cook]
    setCooks(newCoookings)
  }
  return (
    <div className="container mx-auto">
     <Navbar></Navbar>
     <Banner></Banner>
     <Title></Title>
     <div className="md:flex gap-5">
      <Products handleCook={handleCook}></Products>
      <SideBar cooks={cooks}></SideBar>
     </div>
    </div>
  )
}

export default App

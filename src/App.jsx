import { useState } from "react"
import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Navbar/Navbar"
import Products from "./Components/Products/Products"
import SideBar from "./Components/SideBar/SideBar"
import Title from "./Components/Title/Title"
import toast, { Toaster } from "react-hot-toast"


function App() {
  const [cooks, setCooks] = useState([])
 
  const handleCook = cook => {
    const exitings = cooks.find((match) => match.recipe_id ===cook.recipe_id)
    if(!exitings) {
      const newCoookings = [...cooks, cook]
    setCooks(newCoookings)
    } else{
      toast.error("Already selected.")

    }
    
  }
  const handlePreparing = prepare => {
    console.log("Preparing", prepare)
  }
  return (
    <div className="container mx-auto">
      <Toaster
  position="top-right"
  reverseOrder={false}
/>


     <Navbar></Navbar>
     <Banner></Banner>
     <Title></Title>
     <div className="md:flex gap-5">
      <Products handleCook={handleCook}></Products>
      <SideBar cooks={cooks} handlePreparing={handlePreparing}></SideBar>
     </div>
    </div>
  )
}

export default App

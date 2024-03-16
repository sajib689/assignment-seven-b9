import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Navbar/Navbar"
import Products from "./Components/Products/Products"
import SideBar from "./Components/SideBar/SideBar"
import Title from "./Components/Title/Title"


function App() {
  return (
    <div className="container mx-auto">
     <Navbar></Navbar>
     <Banner></Banner>
     <Title></Title>
     <div className="md:flex gap-5">
      <Products></Products>
      <SideBar></SideBar>
     </div>
    </div>
  )
}

export default App

import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import SideBar from "./Components/SideBar/SideBar";
import Title from "./Components/Title/Title";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer/Footer";

function App() {
  const [cooks, setCooks] = useState([]);
  const [prepared, setPrepared] = useState([]);
  const handleCook = (cook) => {
    const exitings = cooks.find((match) => match.recipe_id === cook.recipe_id);
    if (!exitings) {
      const newCoookings = [...cooks, cook];
      setCooks(newCoookings);
      toast.success('Recipe added success!')
    } else {
      toast.error("Already selected.");
    }
  };
  const handlePreparing = (prepare) => {
    const exitings = prepared.find(
      (match) => match.recipe_id === prepare.recipe_id
    );
    if (!exitings) {
      const newPrepared = [...prepared, prepare];
      setPrepared(newPrepared);
    } else {
      toast.error("Already Prepared.");
    }
  };
  return (
    <div className="container mx-auto">
      <Toaster position="top-right" reverseOrder={false} />

      <Navbar></Navbar>
      <Banner></Banner>
      <Title></Title>
      <div className="md:flex gap-5 p-2">
        <Products handleCook={handleCook}></Products>
        <SideBar
          cooks={cooks}
          prepared={prepared}
          handlePreparing={handlePreparing}
        ></SideBar>
      </div>
      <Footer ></Footer>
    </div>
  );
}

export default App;

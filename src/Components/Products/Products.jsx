import { useEffect, useState } from "react";
import Product from "./../Product/Product";

const Products = ({handleCook}) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("receipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="mt-20 grid grid-cols md:grid-cols-2 gap-5">
      {recipes.map((recipe) => (
        <Product key={recipe.id} recipe={recipe} handleCook={handleCook}></Product>
      ))}
    </div>
  );
};

export default Products;

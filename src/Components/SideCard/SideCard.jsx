import { useState } from "react";


const SideCard = ({cook,index,handlePreparing}) => {
    const {
        recipe_name,
        preparing_time,
        calories,
      } = cook;

const [isHidden, setHidden] = useState(false)
const handleClick = () => {
    handlePreparing(cook)
    setHidden(true)
}
    return (
        <>
           {
            !isHidden && 
            <tr>
              <th>{index+1}</th>
              <td>{recipe_name}</td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
              <td><button onClick={handleClick} className="btn bg-[#0BE58A] border-0">Preparing</button></td>
            </tr> 
           }
        </>
    );
};

export default SideCard;
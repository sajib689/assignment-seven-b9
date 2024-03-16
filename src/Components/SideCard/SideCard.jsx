

const SideCard = ({cook,index,handlePreparing}) => {
    const {
        recipe_name,
        preparing_time,
        calories,
      } = cook;



    return (
        <>
           <tr>
              <th>{index+1}</th>
              <td>{recipe_name}</td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
              <td><button onClick={() => handlePreparing(cook)} className="btn bg-[#0BE58A] border-0">Preparing</button></td>
            </tr> 
        </>
    );
};

export default SideCard;
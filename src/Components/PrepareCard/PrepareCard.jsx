
const PrepareCard = ({prepare,index}) => {
  
    const {
        recipe_name,
        preparing_time,
        calories,
      } = prepare;
    return (
        <>
            <tr>
              <th>{index+1}</th>
              <td>{recipe_name}</td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
              
            </tr>  
        </>
    );
};

export default PrepareCard;
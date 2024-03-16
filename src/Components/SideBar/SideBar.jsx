import PrepareCard from "../PrepareCard/PrepareCard";
import SideCard from "../SideCard/SideCard";

const SideBar = ({ cooks,handlePreparing,prepared }) => {
    const costMap = prepared.map(cost => {return cost.preparing_time})
    const caloriesMap = prepared.map(calo => {return calo.calories})
    const totalTime = costMap.reduce((a,b) => a+b,0)
    const totalCalories = caloriesMap.reduce((a,b) => a+b,0)
    
  return (
    <div className="mt-20 border rounded-lg w-[380px] md:w-[450px]">
      <h1 className="text-center mt-3 mb-3 font-bold text-[#282828] text-[24px]">
        Want to cook: {cooks.length - prepared.length}
      </h1>
      <hr />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cooks.map((cook,index) => (
              <SideCard key={cook.recipe_id} handlePreparing={handlePreparing} index={index} cook={cook}></SideCard>
            ))}
            
          </tbody>
        </table>
        <hr />
            <h1 className="text-center mt-3 font-bold text-[#282828] text-[24px]">Currently cooking: {prepared.length}</h1>
            <table className="table">
          {/* head 2*/}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
           {
            prepared.map((prepare,index) => <PrepareCard key={prepare.recipe_id}  index={index} prepare={prepare}></PrepareCard>)
           }
            <tr>
                <td></td>
                <td></td>
                <td>Total Time = {totalTime} minutes</td>
                <td>Total Calories = {totalCalories} calories</td>
            </tr>
          </tbody>
        </table>
        <hr />
      </div>
    </div>
  );
};

export default SideBar;

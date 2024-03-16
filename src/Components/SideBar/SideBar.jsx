import SideCard from "../SideCard/SideCard";

const SideBar = ({ cooks,handlePreparing }) => {
  return (
    <div className="mt-20 border rounded-lg md:w-[450px]">
      <h1 className="text-center mt-3 font-bold text-[#282828] text-[24px]">
        Want to cook: {cooks.length}
      </h1>
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
      </div>
    </div>
  );
};

export default SideBar;

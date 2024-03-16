import SideCard from "../SideCard/SideCard";

const SideBar = ({ cooks }) => {
  const {
    recipe_image,
    recipe_name,
    description,
    ingredients,
    preparing_time,
    calories,
  } = cooks;
  return (
    <div className="mt-20 border rounded-lg w-[450px]">
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
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {cooks.map((cook) => (
              <SideCard key={cook.recipe_id} cook={cook}></SideCard>
            ))}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SideBar;

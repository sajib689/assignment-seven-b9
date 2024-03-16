
const SideBar = ({cooks}) => {
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
            <h1 className="text-center mt-3 font-bold text-[#282828] text-[24px]">Want to cook: {cooks.length}</h1>
        </div>
    );
};

export default SideBar;
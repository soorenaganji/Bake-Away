import FoodCard from "../modules/FoodCard";

const Menu = ({ data }) => {
  
  return (
    <div className="w-full">
      <h3 className="text-4xl bg-pink-300 inline-block p-4 rounded-lg shadow-xl  shadow-pink-200  mb-32">
        Menu
      </h3>
      <div className="w-full flex items-center justify-between flex-wrap mx-auto px-8 gap-6">
        {data.map((food) => (
          <FoodCard data={food} key={food.id} />
        ))}
      </div>
    </div>
  );
};

export default Menu;

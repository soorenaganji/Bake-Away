import Image from "next/image";
import { CiLocationOn, CiMoneyBill } from "react-icons/ci";
const FoodDetails = ({ data }) => {
  const discountHandler = (discount) => {
    if (discount == 0) return 0;
    else {
      return `${discount} %`;
    }
  };
  const priceOnDiscountHandler = (price) => {
    if (discount == 0) return <p>{price} $</p>;
    else {
      return (
        <>
          <p className="line-through text-slate-500 mt-[-10px] text-lg ">
            {price} $
          </p>{" "}
          <p className="px-3 py-1 rounded-lg bg-pink-200 mt-[-10px] text-lg ">
            {(price * (100 - discount)) / 100} $
          </p>
        </>
      );
    }
  };
  const {
    id,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = data;
  return (
    <div>
      <h3 className="text-2xl md:text-4xl lg:text-4xl bg-pink-300 inline-block p-4 rounded-lg shadow-xl shadow-pink-200 mb-32 ">
        Details
      </h3>
      <div className="w-full py-4 flex flex-col items-start justify-start gap-8 ">
        <div className="">
          <div
            className={
              data.discount != 0
                ? "float-right w-16 h-16 relative right-4 bottom-12 mb-[-80px] bg-pink-300 flex items-center justify-center rounded-t-full p-2 rounded-r-full "
                : "hidden"
            }
          >
            {discountHandler(discount)}
          </div>
          <Image
            src={`/images/${id}.jpeg`}
            width="600"
            height={"600"}
            className=" rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-16 ">
          <h3 className="text-xl md:text-3xl lg:text-3xl text-pink-500 font-semibold ">
            {name}
          </h3>
          <div className="flex items-center justify-center gap-1 text-slate-800 text-lg ">
            <CiLocationOn className="text-xl md:text-2xl lg:text-2xl " />{" "}
            <p>{details[0].Cuisine}</p>{" "}
          </div>
          <div className="w-full mt-3 flex items-start justify-start gap-2 ml-[-10px] text-slate-800 px-3">
            <CiMoneyBill className="text-4xl mt-[-10px] " />
            <div className="flex items-center justify-center gap-3">
              {priceOnDiscountHandler(price)}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <p className="mt-16 text-justify md:text-lg lg:text-lg text-slate-700 ">
          {introduction}
        </p>
      </div>
      <div className="">
        <h3 className="text-2xl bg-pink-300 inline-block p-4 rounded-lg shadow-xl shadow-pink-200 mb-10">
          More Details{" "}
        </h3>
        <ul className="flex flex-col items-start justify-start gap-12 pl-2 list-decimal mb-16">
          {details.map((detail, index) => (
            <li
              key={index}
              className="flex items-center justify-start gap-1 md:gap-2 lg:gap-2 list-decimal "
            >
              <span className="text-lg md:text-xl lg:text-xl font-semibold ">
                {Object.keys(detail)[0]} :{" "}
              </span>
              <span className="md:text-lg lg:text-lg">
                {Object.values(detail)[0]}
              </span>
            </li>
          ))}
        </ul>
        <div className="mb-16">
          <h4 className="text-2xl bg-pink-300 inline-block p-4 rounded-lg shadow-xl shadow-pink-200 mb-10">
            Ingredients
          </h4>
          <ul className="flex flex-col items-start justify-start gap-12 pl-2  mb-16">
            {ingredients.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-start gap-2  md:text-xl lg:text-xl "
              >
                <p className="text-justify" > {item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-2xl bg-pink-300 inline-block p-4 rounded-lg shadow-xl shadow-pink-200 mb-10">
            Recipe
          </h4>
          <div className="">
            {recipe.map((item, index) => (
              <div
                key={index}
                className={
                  index % 2
                    ? `p-6 flex items-start justify-start text-lg gap-2 bg-pink-300 shadow-xl shadow-pink-200 rounded-lg my-16 `
                    : `p-6 flex items-start justify-start text-lg gap-2 bg-pink-500 text-white shadow-xl shadow-pink-300 rounded-lg my-16`
                }
              >
                <span>{index + 1}</span>
                <p className="text-justify"> - {item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="py-6 text-2xl px-16 shadow-xl shadow-pink-200 rounded-lg ml-[27.5%] bg-pink-300 w-[45%] mt-32  ">
        Buy
      </button>
    </div>
  );
};

export default FoodDetails;

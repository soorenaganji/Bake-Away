import Image from "next/image";
import { CiLocationOn, CiMoneyBill } from "react-icons/ci";
import Link from "next/link";
const FoodCard = ({ data }) => {
  const discountHandler = (discount) => {
    if (discount == 0) return 0;
    else {
      return `${discount} %`;
    }
  };
  const priceOnDiscountHandler = (price) => {
    if (data.discount == 0) return <p>{price} $</p>;
    else {
      return (
        <>
          <p className="line-through text-slate-500  mb-[-10px]">{price} $</p>{" "}
          <p className="px-3 py-1 rounded-lg bg-pink-200 mb-[-10px]">
            {(price * (100 - data.discount)) / 100} $
          </p>
        </>
      );
    }
  };
  return (
    <div className="w-72 h-96 shadow-lg my-8 rounded-2xl flex flex-col items-start justify-start gap-3 ">
      <div>
        <div
          className={
            data.discount != 0
              ? "float-left w-12 h-12 relative right-8 bottom-8 mb-[-80px] bg-pink-300 flex items-center justify-center text-xs rounded-t-full p-2 rounded-l-full "
              : "hidden"
          }
        >
          {discountHandler(data.discount)}
        </div>
        <Image
          src={`/images/${data.id}.jpeg`}
          width="200"
          height={"200"}
          className="w-full rounded-2xl p-3  "
        />
      </div>
      <div className="flex items-center justify-start flex-col w-full px-3">
        <div className="flex w-full items-center justify-between">
          <p className=" rounded-lg text-pink-500 font-semibold">
            {" "}
            {data.name}{" "}
          </p>
          <div className="flex items-center justify-center gap-1 text-slate-700 text-sm ">
            <CiLocationOn className="text-lg" />{" "}
            <p>{data.details[0].Cuisine}</p>{" "}
          </div>
        </div>
      </div>
      <div className="w-full mt-3 flex items-start justify-start gap-2 px-3">
        <CiMoneyBill className="text-2xl" />
        <div className="flex items-center justify-center gap-3">
          {priceOnDiscountHandler(data.price)}
        </div>
      </div>
      <div className="flex w-full items-center justify-between mt-6 px-3">
        <button className="py-3.5 text-sm px-4 rounded-lg bg-pink-200 w-[45%]  ">
          <Link href={`/Menu/${data.id}`}>See Details</Link>
        </button>
        <button className="py-3 text-white px-4 rounded-lg bg-pink-500 w-[45%]  ">
          Buy
        </button>
      </div>
    </div>
  );
};

export default FoodCard;

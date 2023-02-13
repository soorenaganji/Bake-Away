import { Button } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <div className="mt-6 py-6 mx-auto w-full flex items-center justify-center gap-12 mb-6 md:mb-12 lg:mb-16 ">
      <h1 className="text-pink-500 lg:text-5xl font-bold md:text-4xl text-2xl w-[50%]  ">
        {" "}
        <Link href={"/"}> Bake Away! </Link>
      </h1>
      <div className="w-[30%] md:w-[50%] lg:w-[50%] gap-2 md:gap-6 lg:gap-6 flex justify-end px-0 md:px-3 lg:px-3 ">
        <button
          variant="text"
          size="large"
          color="secondary"
          className=" text-black  p-1 md:px-6 md:py-3 text-sm md:text-md lg:text-md hover:bg-pink-100 hover:border-pink-500 font-[Poppins] rounded-lg  "
        >
          <Link href={"/Menu"}>Menu</Link>
        </button>
        <button
          variant="text"
          size="large"
          color="secondary"
          className="border-pink-400 px-4 py-2 md:px-6 md:py-3 text-sm text-black md:text-md lg:text-md   hover:bg-pink-100 hover:border-pink-500 font-[Poppins] rounded-lg "
        >
          <Link href={"/Categories"}>Categories</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;

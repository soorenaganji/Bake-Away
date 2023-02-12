import { Button } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <div className="mt-6 py-6 mx-auto w-full flex items-center justify-center gap-12 mb-16 ">
      <h1 className="text-pink-500 text-5xl font-bold "> <Link href={"/"} > Bake Away! </Link></h1>
      <div className="w-[50%] gap-6 flex justify-end px-3 ">
        <button
          variant="text"
          size="large"
          color="secondary"
          className=" text-black  px-6 py-3 hover:bg-pink-100 hover:border-pink-500 font-[Poppins] rounded-lg "
        >
          <Link href={"/Menu"} >
          Menu
          </Link>
        </button>
        <button
          variant="text"
          size="large"
          color="secondary"
          className="border-pink-400 px-6 py-3 text-black hover:bg-pink-100 hover:border-pink-500 font-[Poppins] rounded-lg "
        >
          <Link href={"/Categories"} >
          Categories</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;

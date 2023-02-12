import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import HeaderImage from "@/public/headerImage.png";
import Link from "next/link";
function Banner() {
  return (
    <div>
      <header className="w-full flex items-center justify-center gap-4 ">
        <div className="flex items-start justify-start flex-col gap-8 ">
          <div className="text-2xl font-semibold flex  items-center justify-center  p-1 rounded-xl text-center ">
            <h2 className=" bg-pink-300 inline-block p-4 rounded-lg shadow-xl shadow-pink-200">
              Bake Away!
            </h2>
          </div>
          <p className="text-justify w-[80%] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi omnis
            placeat fugit delectus incidunt suscipit veritatis quasi,
            praesentium natus labore rem, non deserunt quod laboriosam ratione
            voluptatibus magni tempore similique.
          </p>
          <button
            
            className="py-3 text-white px-4 rounded-lg bg-pink-500 w-32 text-lg "
          >
            {" "}
            <Link href={"/Menu"}>Let&apos;s Start</Link>
          </button>
        </div>
        <Image className="w-[45%] " src={HeaderImage} />
      </header>
    </div>
  );
}

export default Banner;

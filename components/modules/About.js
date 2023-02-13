import React from "react";
import { Card, CardContent } from "@mui/material";
import Image from "next/image";
import aboutImage from "@/public/about.png";
function About() {
  return (
    <div className="w-full ">
      <div className="mt-32 py-8 px-4 bg-slate-50 rounded-lg mx-auto flex flex-col lg:flex-row border-[1px] ">
        <div>
          <h3 className="mb-12 text-4xl font-semibold">About Us</h3>
          <p className="w-full px-4 lg:p-0 text-sm md:text-md lg:text-lg lg:w-[80%] text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            aspernatur sunt ad, voluptate suscipit fugiat atque corporis.
            Provident, quia eos voluptatibus commodi, ex voluptate dicta, cum
            nulla facilis fugit dolorum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis aspernatur sunt ad, voluptate suscipit
            fugiat atque corporis. Provident, quia eos voluptatibus commodi, ex
            voluptate dicta, cum nulla facilis fugit dolorum. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Blanditiis aspernatur sunt
            ad, voluptate suscipit fugiat atque corporis. Provident, quia eos
            voluptatibus commodi, ex voluptate dicta, cum nulla facilis fugit
            dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis aspernatur sunt ad, voluptate suscipit fugiat atque
            corporis. Provident, quia eos voluptatibus commodi, ex voluptate
            dicta, cum nulla facilis fugit dolorum.
          </p>
        </div>
        <Image src={aboutImage} className="w-[90%] lg:w-[50%] " />
      </div>
    </div>
  );
}

export default About;

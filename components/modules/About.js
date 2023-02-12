import React from "react";
import { Card, CardContent } from "@mui/material";
import Image from "next/image";
import aboutImage from "@/public/about.png";
function About() {
  return (
    <div>
      <Card
        variant="outlined"
        className="mt-32 py-8 px-4 bg-slate-50 rounded-lg mx-auto flex  "
      >
        <CardContent>
          <h3 className="mb-12 text-4xl font-semibold">About Us</h3>
          <p className="w-[80%] text-justify ">
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
        </CardContent>
        <Image src={aboutImage} className="w-[50%]" />
      </Card>
    </div>
  );
}

export default About;

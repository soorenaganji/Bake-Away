import { Card, CardContent } from "@mui/material";
import React from "react";
import { ImRocket } from "react-icons/im";
import { GiKnifeFork, GiChoice } from "react-icons/gi";
import { RxCounterClockwiseClock } from "react-icons/rx";
function CardsStack() {
  return (
    <div className="mt-12 md:mt-16 lg:mt-16">
      <h3 className="mb-8 text-2xl font-semibold text-center">
        The Choice is Yours
      </h3>
      <div className="flex items-center justify-around flex-col lg:flex-row">
        <Card className="px-8 py-4 w-100 md:w-[40%] lg:w-[19%] my-8 rounded-lg shadow-lg ">
          <CardContent className="flex flex-col justify-center items-center gap-7 ">
            <ImRocket className="text-8xl text-pink-500 m-auto text-center " />
            <h3 className="text-xl text-center ">Fast</h3>
          </CardContent>
        </Card>
        <Card className="px-8 py-4 w-100 md:w-[40%] lg:w-[19%] my-8 rounded-lg shadow-lg  ">
          <CardContent className="flex flex-col justify-center items-center gap-6 ">
            <GiKnifeFork className="text-8xl text-pink-500 m-auto text-center " />
            <h3 className="text-xl text-center ">Delicious</h3>
          </CardContent>
        </Card>
        <Card className="px-8 py-4 w-100 md:w-[40%] lg:w-[19%] my-8 rounded-lg shadow-lg  ">
          <CardContent className="flex flex-col justify-center items-center gap-6 ">
            <GiChoice className="text-8xl text-pink-500 m-auto text-center " />
            <h3 className="text-xl text-center ">Your Choice</h3>
          </CardContent>
        </Card>
        <Card className="px-8 py-4 w-100 md:w-[40%] lg:w-[19%] my-8 rounded-lg shadow-lg  ">
          <CardContent className="flex flex-col justify-center items-center gap-6 ">
            <RxCounterClockwiseClock className="text-8xl text-pink-500 m-auto text-center " />
            <h3 className="text-xl text-center ">24/7</h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CardsStack;

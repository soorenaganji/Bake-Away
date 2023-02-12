import React, { Component } from "react";
import Slider from "react-slick";
import SlickCard from "./SlickCard";
import avatar1 from "@/public/avatar1.jpg";
import avatar2 from "@/public/avatar2.jpg";
import avatar3 from "@/public/avatar3.jpg";
import avatar4 from "@/public/avatar4.jpg";
import avatar5 from "@/public/avatar5.jpg";
import avatar6 from "@/public/avatar6.jpg";
const Slick = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
  };
  return (
    <>
    <h2 className="text-3xl text-center mb-8 font-semibold mt-32 ">FeedBacks!</h2>
    <div className=" w-full mx-auto ">
      <div>
        <Slider
          {...settings}
          className="w-full  mx-auto flex  items-center justify-around pt-2 pl-16"
        >
          <div>
            <SlickCard
              avatar={avatar1}
              name={"Robert Brat"}
              time={"1d"}
              job={"Personal Trainer"}
            />
          </div>
          <div>
            <SlickCard
              avatar={avatar2}
              name={"John Lee "}
              time={"5d"}
              job={"Nurse"}
            />
          </div>
          <div>
            <SlickCard
              avatar={avatar3}
              name={"Marshal Jones"}
              time={"1w"}
              job={"Musician"}
            />
          </div>
          <div>
            <SlickCard
              avatar={avatar4}
              name={"Tony Pattinson"}
              time={"3w"}
              job={"Programmer"}
            />
          </div>
          <div>
            <SlickCard
              avatar={avatar5}
              name={"Sunny Hemworth"}
              time={"3w"}
              job={"Doctor"}
            />
          </div>
          <div>
            <SlickCard
              avatar={avatar6}
              name={"Clara Storm "}
              time={"1mo"}
              job={"Employee"}
            />
          </div>
        </Slider>
      </div>
    </div>
    </>
  );
};

export default Slick;

import banner from "@/public/categoriesBanner.svg";
import Image from "next/image";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FoodCard from "../modules/FoodCard";
const Categories = ({ data }) => {
  const router = useRouter();
  const options = ["Easy", "Medium", "Hard"];
  const options2 = ["More Than 30 Minutes", "Less Than 30 Minutes"];
  const [difficulty, setDifficulty] = useState("");
  const [time, setTime] = useState("");
  const [query, setQuery] = useState({ difficulty, time });
  useEffect(() => {
    const { difficulty, time } = router.query;
    if (query.difficulty !== difficulty || query.time !== time) {
      setQuery({ difficulty, time });
    }
  }, []);
  const searcher = ({ data }) => {
    console.log(query);
    router.push({
      pathname: "/Categories",
      query,
    });
  };
  return (
    <div>
      <div className="flex items-center flex-col md:flex-row lg:flex-row justify-center mb-20 gap-8">
        <Autocomplete
          color="secondary"
          value={difficulty}
          onChange={(event, newValue) => {
            setDifficulty(newValue);
            setQuery({ ...query, difficulty: newValue });
            if (newValue == "") {
              setDifficulty("difficulty");
              setQuery({ ...query, difficulty: "difficulty" });
            }
          }}
          className="transition-none "
          id="combo-box-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Difficulty" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          value={time}
          onChange={(event, newValue) => {
            setTime(newValue);
            if (newValue === "More Than 30 Minutes") {
              setQuery({ ...query, time: "more" });
              setTime(newValue);
            } else if (newValue === "Less Than 30 Minutes") {
              setQuery({ ...query, time: "less" });
              setTime(newValue);
            } else if (newValue === "") {
              setQuery({ ...query, time: "" });
            }
          }}
          onInputChange={(event, newInputValue) => {
            if (newInputValue === "")
              setQuery({ ...query, time: newInputValue });
          }}
          options={options2}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Cooking Time" />
          )}
        />
        <button
          type="submit"
          onClick={searcher}
          className="py-3 text-white px-4 rounded-lg bg-pink-500 w-36  "
        >
          Search
        </button>
      </div>
      <div className="w-full flex items-center justify-between px-8 flex-wrap ">
        {data.length ? (
          data.map((food) => <FoodCard data={food} key={food.id} />)
        ) : (
          <Image src={banner} className="mx-auto" />
        )}
      </div>
    </div>
  );
};

export default Categories;

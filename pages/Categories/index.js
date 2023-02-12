import Categories from "@/components/templates/Categories";
const index = ({ data }) => {
  return (
    <div>
      <Categories data={data} />
    </div>
  );
};
export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();
  const filteredData = data.filter((food) => {
    const difficultyResult = food.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );
    const timeResult = food.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const timeDetail = cookingTime.split(" ");
      if (time === "less" && timeDetail && +timeDetail[0] < 30) {
        return detail;
      } else if (time === "more" && +timeDetail[0] > 30) {
        return detail;
      }
    });
    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return food;
    } else if (!time && difficulty && difficultyResult.length) {
      return food;
    } else if (time && !difficulty && timeResult.length) {
      return food;
    }
  });
  return {
    props: { data: filteredData },
  };
}
export default index;

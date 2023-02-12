import FoodDetails from "@/components/templates/FoodDetails";
import { useRouter } from "next/router";
function Details({ data }) {
  const router = useRouter();
  return (
    <>
      {console.log(data.name)}
      <FoodDetails data={data} />
    </>
  );
}

export default Details;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();
  console.log(data[0].name )
  const paths = data.map((food) => ({
    params: { menuId: food.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { menuId },
  } = context;
  const res = await fetch(`${process.env.BASE_URL}/data/${menuId}`);
  const data = await res.json();
  console.log(data.name)
  return {
    props: { data },
    revalidate: 10,
  };
}

import Menu from "@/components/templates/Menu";
const Index = ({ data }) => {

  return (
   <>
   <Menu data={data} />
   </>
  );
};
export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();
  return {
    props: {
      data,
    },
    revalidate : 10 , //seconds
  };
}

export default Index;

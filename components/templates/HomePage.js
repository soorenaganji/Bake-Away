import CardsStack from "@/components/modules/CardsStack";
import Banner from "@/components/modules/Banner";
import About from "@/components/modules/About";
import Slick from "@/components/modules/Slick";
const HomePage = () => {
    return (
        <main >
        <Banner/>
        <CardsStack/>
        <About/>
        <Slick />
      </main>
    );
}

export default HomePage;
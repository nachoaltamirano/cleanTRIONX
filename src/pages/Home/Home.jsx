import Hero from "../../components/common/Hero/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Benefits from "./components/Benefits";
import Newsletter from "./components/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Benefits />
      <Newsletter />
    </>
  );
};

export default Home;
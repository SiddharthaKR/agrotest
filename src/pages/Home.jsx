import Bottom from "../components/Home/Bottom";
import Cards from "../components/Home/Cards";
import Reviews from "../components/Home/Reviews";
import Top from "../components/Home/Top";
import Work from "../components/Home/Work";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Top />
      <Cards />
      <Work />
      <Reviews />
      <Bottom />
      <Footer />
    </>
  );
}

export default Home;

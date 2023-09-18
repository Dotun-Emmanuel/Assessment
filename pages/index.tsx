import FirstSection from "./landing-page/firstSection";
import Footer from "./landing-page/footer";
import FourthSection from "./landing-page/fourthSection";
import Header from "./landing-page/header";
import SecondSectionCard, { MiniWord } from "./landing-page/secondSection";
import ThirdSectionCard from "./landing-page/thirdSection";

function Home() {
  return (
    <div className="w-fit">
      <Header />
      <FirstSection />
      <div className="md:bg-[#F1E7EB]">
        <div className="md:w-[80%] mx-auto flex md:gap-28 min-[300px]:flex-col md:flex-row-reverse min-[300px]:gap-4">
          <MiniWord />
          <SecondSectionCard />
        </div>
      </div>
      <ThirdSectionCard />
      <FourthSection />
      <Footer />
    </div>
  );
}

export default Home;

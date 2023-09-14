import FirstSection from "../components/landing-page/firstSection";
import Footer from "../components/landing-page/footer";
import FourthSection from "../components/landing-page/fourthSection";
import Header from "../components/landing-page/header";
import SecondSectionCard, {
  MiniWord,
} from "../components/landing-page/secondSection";
import ThirdSectionCard from "../components/landing-page/thirdSection";

function Home() {
  return (
    <div>
      <Header />
      <FirstSection />
      <div className="bg-[#F1E7EB]">
        <div className="w-[80%] mx-auto flex gap-28">
          <SecondSectionCard />
          <MiniWord />
        </div>
      </div>
      <ThirdSectionCard />
      <FourthSection />
      <Footer />
    </div>
  );
}

export default Home;

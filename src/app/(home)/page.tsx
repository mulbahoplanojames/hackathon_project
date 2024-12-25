import HomeHero from "@/components/Home/HomeHero";
import HowItWorks from "@/components/Home/HowItWorks";
import OurVision from "@/components/Home/OurVision";

const Home = () => {
  return (
    <>
      <section className="w-full">
        <HomeHero />
        <OurVision />
        <HowItWorks />
      </section>
    </>
  );
};

export default Home;

import HomeHero from "@/components/Home/HomeHero";
import HowItWorks from "@/components/Home/HowItWorks";
import KeyFeatures from "@/components/Home/KeyFeatures";
import OurVision from "@/components/Home/OurVision";

const Home = () => {
  return (
    <>
      <section className="w-full">
        <HomeHero />
        <OurVision />
        <HowItWorks />
        <KeyFeatures />
      </section>
    </>
  );
};

export default Home;

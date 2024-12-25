import HomeHero from "@/components/Home/HomeHero";
import HowItWorks from "@/components/Home/HowItWorks";
import KeyFeatures from "@/components/Home/KeyFeatures";
import OurVision from "@/components/Home/OurVision";
import UnlockPotential from "@/components/Home/UnlockPotential";
import UserReviews from "@/components/Home/UserReviews";

const Home = () => {
  return (
    <>
      <section className="w-full">
        <HomeHero />
        <OurVision />
        <KeyFeatures />
        <HowItWorks />
        <UnlockPotential />
        <UserReviews />
      </section>
    </>
  );
};

export default Home;

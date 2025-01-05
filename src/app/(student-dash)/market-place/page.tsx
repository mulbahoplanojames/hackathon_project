import DashboardHeader from "@/components/dashboard-header";
import HeaderCards from "@/components/market_palce/HeaderCards";
import ProductGrid from "@/components/market_palce/ProductGrid";
import SearchBar from "@/components/market_palce/Search";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const MarketPlace = () => {
  return (
    <>
      <section className="p-4 pt-3 relative">
        <DashboardHeader text="Market Place" />
        <HeaderCards />
        <Text />
        <ProductGrid />
        <div className="bg-primary_Clr text-white w-40 h-10 rounded-md fixed top-[21rem] right-8 flex justify-center items-center gap-4 ">
          <SearchBar />
        </div>
      </section>
    </>
  );
};

const Text = () => {
  return (
    <div className="md:mt-10 mt-6">
      <AnimatedGradientText className="group-hover:shadow-[inset_0_-5px_10px_#8fdfff3f] mb-6">
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-primary_Clr" />
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#064E3B] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          Start Your Shopping Journey
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
};

export default MarketPlace;

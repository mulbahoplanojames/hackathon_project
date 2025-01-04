import DashboardHeader from "@/components/dashboard-header";
import HeaderCards from "@/components/market_palce/HeaderCards";
import ProductGrid from "@/components/market_palce/ProductGrid";

const MarketPlace = () => {
  return (
    <>
      <section className="p-4 pt-3">
        <DashboardHeader text="Market Place" />
        <HeaderCards />
        <ProductGrid />
      </section>
    </>
  );
};

export default MarketPlace;

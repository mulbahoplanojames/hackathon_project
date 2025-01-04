import DashboardHeader from "@/components/dashboard-header";
import HeaderCards from "@/components/market_palce/HeaderCards";

const MarketPlace = () => {
  return (
    <>
      <section className="p-4 pt-3">
        <DashboardHeader text="Market Place" />
        <HeaderCards />
      </section>
    </>
  );
};

export default MarketPlace;

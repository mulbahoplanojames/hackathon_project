import DashboardHeader from "@/components/dashboard-header";
import CardsWripper from "@/components/Home_dashboard/CardWripper";

export default function Page() {
  return (
    <>
      <section className="p-4 pt-3">
        <DashboardHeader text="Dashboard" />
        <h1 className="lg:text-4xl text-3xl pb-3">Welcome Back Oplano</h1>
        <p className="text-lg md:w-[42%] w-full md:pb-4 pb-6">
          Your progress this week is Awesome. let&apos;s keep it up and get a
          lot of points reward !
        </p>

        <CardsWripper />
      </section>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
}

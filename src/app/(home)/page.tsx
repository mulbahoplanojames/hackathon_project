import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="px-12 w-full">
        <h1 className="text-2xl ">Home Page</h1>

        <Link href="/dashboard" className="py-8 block text-blue-900 underline">
          Link to dashboard
        </Link>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </section>
    </>
  );
};

export default Home;

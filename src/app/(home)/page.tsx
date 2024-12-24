import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="px-12 w-full">
        <h1 className="text-2xl ">Home Page</h1>

        <Link href="/dashboard" className="py-8 block">
          Link to dashboard
        </Link>
      </section>
    </>
  );
};

export default Home;

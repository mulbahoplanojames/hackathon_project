import { Button } from "@/components/ui/button";
import Link from "next/link";

const LogIn = () => {
  return (
    <>
      <section className="">
        <Link href="/">
          <Button>Back Home</Button>
        </Link>
        <h2>test</h2>
        <h1 className="text-2xl pt-8">Login Page</h1>
      </section>
    </>
  );
};

export default LogIn;

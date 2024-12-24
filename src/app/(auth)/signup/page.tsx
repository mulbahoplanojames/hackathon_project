import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <section className="px-12 w-full py-20">
        <Link href="/">
          <Button>Back Home</Button>
        </Link>
        <h1 className="text-2xl pt-8">SignUp Page</h1>
      </section>
    </>
  );
};

export default SignUp;

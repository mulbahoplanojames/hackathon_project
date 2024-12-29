import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <section className="">
        <Link href="/">
          <Button>Back Home</Button>
        </Link>
        <h1 className="text-2xl pt-8">SignUp Page</h1>
        <h1>Danny</h1>
      </section>
    </>
  );
};

export default SignUp;

import { Button } from "./ui/button";
import Link from "next/link";

function AboutUsHeader() {
    return (
      <div className="bg-[url('/about-hero.svg')] bg-center bg-cover">
        <div className="w-full h-full backdrop-brightness-50 bg-black/30 px-5 py-28 md:px-10 md:py-48">
          <h1 className=" text-white text-6xl sm:text-7xl md:text-9xl">About Us</h1>
          <p className="text-white text-2xl py-5 md:w-[740px]">
            Generate Lorem Ipsum placeholder text for use in
            your graphic, print and web layouts, and discover
            plugins for your favorite writing, design and
            blogging tools. Explore the origins, history and
            meaning of the famous passage.
          </p>
          <Link href="/signup">
            <Button className="bg-[#65a30d] text-white text-xl mt-3 rounded-xl py-8 px-5">
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    );
  }

export default AboutUsHeader
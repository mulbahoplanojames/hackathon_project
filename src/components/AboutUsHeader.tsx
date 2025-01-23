import { Button } from "./ui/button";
import Link from "next/link";

function AboutUsHeader() {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dx2ub50ms/image/upload/v1737655482/about_hero_m851cw.png')] bg-center bg-cover">
      <div className="w-full h-full backdrop-brightness-50 bg-black/30 px-5 py-28 md:px-10 md:pb-32 md:pt-36">
        <h1 className=" text-white text-6xl sm:text-7xl md:text-7xl">
          About Us
        </h1>
        <p className="text-white text-xl py-5 md:w-[740px]">
          Generate Lorem Ipsum placeholder text for use in your graphic, print
          and web layouts, and discover plugins for your favorite writing,
          design and blogging tools. Explore the origins, history and meaning of
          the famous passage.
        </p>
        <Link href="/signup">
          <Button className="bg-primary_Clr text-white text-xl mt-3 py-6 px-5 rounded-xl">
            Create Account
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AboutUsHeader;

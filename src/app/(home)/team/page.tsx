import React from "react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    image: "/Image 22.svg",
  },
  {
    image: "/Image 21.svg",
  },
  {
    image: "/Image 23.svg",
  },
];

interface CardProps {
  image: string;
}

const Card = ({ image }: CardProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-[20px] overflow-hidden shadow-lg border border-gray-200 dark:border-slate-800 w-[23rem] h-[30rem] m-4 md:w-[20rem] sm:w-[18rem] mx-[2rem]">
      <Image
        src={image}
        alt=""
        width={80}
        height={300}
        className="w-full h-[15rem] object-cover"
      />
      <div className="p-4 flex flex-col items-center mt-6">
        <h2 className="text-xl font-semibold">Full name</h2>
        <p className="text-[#636ae8] mt-2">Professional title</p>
        <p className="text-[1.2rem] text-gray-500 text-center w-[17rem] mt-2">
          Commodo qui nulla ipsum ea cupidatat sit aliquip dolor
        </p>
        <div className="flex mt-4 space-x-4">
          <a href="#">
            <Image src="/logo twitter 2.svg" alt="" width={24} height={24} />
          </a>
          <a href="#">
            <Image src="/logo linkedin 1.svg" alt="" width={24} height={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="flex justify-center  p-4 mt-8">
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <Card key={index} image={member.image} />
        ))}
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <>
      <div className="w-full bg-[url('/Rectangle_14.svg')] bg-cover bg-center bg-no-repeat ">
        <div className="w-full h-full backdrop-brightness-50 bg-black/30 px-10 py-48 ">
          <h1 className="text-3xl sm:text-5xl md:text-9xl mb-4 sm:w-[32rem] text-white">
            Our Team
          </h1>
          <p className="text-sm  text-white sm:text-lg md:text-xl mb-6 sm:w-[32rem]">
            Generate Lorem Ipsum Placeholder text for use in your graphic, print
            and web layouts, and discover plugins for your favorite writing,
            design and blogging tools. Explore the origins, history and meaning
            of the famous passage,
          </p>
          <Link href="/auth/signup">
          <button className="bg-[#65a30d] text-white py-2 px-4 rounded-lg">
            Create Account
          </button>
          </Link>
        </div>
      </div>

      <div className="text-center mt-8">
        <h1 className="text-[4rem]">Our Team</h1>
        <p className="text-[1.2rem] text-[#9095a0] w-[39rem] mx-auto mt-4">
          Do consectetur proident proident id eiusmod deserunt consequat
          pariatur ad ex velit do Lorem reprehenderit.
        </p>
      </div>
      <CardList />
    </>
  );
};

export default Team;

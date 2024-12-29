import React from "react";
import Image from "next/image";

interface TeamMember {
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    imageUrl: "/Image 22.svg",
  },
  {
    imageUrl: "/Image 21.svg",
  },
  {
    imageUrl: "/Image 23.svg",
  },
];

const Card: React.FC<TeamMember> = ({ imageUrl }) => {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-lg border border-gray-200 w-[23rem] h-[30rem] m-4 md:w-[20rem] sm:w-[18rem]">
      <Image
        src={imageUrl}
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

const Team: React.FC = () => {
  return (
    <section className="relative w-full h-full">
      <div className="relative">
        <Image src="/Rectangle 14.svg" alt="team" width={2500} height={800} />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 sm:pl-12 text-white bg-black bg-opacity-50 m-0">
          <h1 className="text-3xl sm:text-5xl md:text-9xl mb-4 text-white">
            Our Team
          </h1>
          <p className="text-sm sm:text-lg md:text-xl mb-6 sm:w-[32rem]">
            Generate Lorem Ipsum Placeholder text for use in your graphic, print
            and web layouts, and discover plugins for your favorite writing,
            design and blogging tools. Explore the origins, history and meaning
            of the famous passage,
          </p>
          <button className="bg-[#65a30d] text-white py-2 px-4 rounded-lg">
            Create Account
          </button>
        </div>
      </div>
      <div className="text-center mt-8">
        <h1 className="text-[4rem]">Our Team</h1>
        <p className="text-[1.2rem] text-[#9095a0] w-[39rem] mx-auto mt-4">
          Do consectetur proident proident id eiusmod deserunt consequat
          pariatur ad ex velit do Lorem reprehenderit.
        </p>
      </div>
      <div className="flex justify-center p-4 mt-8">
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <Card key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

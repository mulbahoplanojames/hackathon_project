import React from "react";
import Link from "next/link";
import Image from "next/image";
import { teamMembers } from "@/data/teamData";
import { OurTeamCard } from "@/components/doctor_teamCards";

const Team = () => {
  return (
    <>
      <div className="w-full bg-[url('/Rectangle_14.svg')] bg-cover bg-center bg-no-repeat">
        <div className="w-full h-full backdrop-brightness-50 bg-black/30 px-5 py-28  md:px-10 md:py-48">
          <h1 className="text-6xl sm:text-7xl md:text-9xl mb-4 text-white">
            Our Team
          </h1>
          <p className="text-white text-2xl py-5  md:w-[740px]">
            Generate Lorem Ipsum Placeholder text for use in your graphic, print
            and web layouts, and discover plugins for your favorite writing,
            design and blogging tools. Explore the origins, history and meaning
            of the famous passage.
          </p>
          <Link href="/signup">
            <button className="bg-[#65a30d] text-white text-xl mt-3 py-4 px-5 rounded-lg">
              Create Account
            </button>
          </Link>
        </div>
      </div>

      <div className="text-center mt-8 px-4">
        <h1 className="text-[3rem]">Our Team</h1>
        <p className="text-xl md:text-2xl text-[#9095a0]  mt-4">
          Do consectetur proident proident id eiusmod deserunt consequat
          <br />
          pariatur ad ex velit do Lorem reprehenderit.
        </p>
        <CardList />
      </div>
    </>
  );
};

export default Team;

const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-0 lg:px-[10rem]  gap-8 ">
      {teamMembers.map((member, index) => (
        <OurTeamCard key={index} image={member.image} />
      ))}
    </div>
  );
};

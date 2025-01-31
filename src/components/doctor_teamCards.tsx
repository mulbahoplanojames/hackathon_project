import React from "react";
import Image from "next/image";
import { TeamMembersType } from "@/types/types";

const OurTeamCard = ({ image }: TeamMembersType) => {
  return (
    <div className="rounded-2xl overflow-hidden mt-4 shadow-lg grid grid-rows-[1fr] max-w-[600px] bg-white dark:bg-sidebar">
      <Image
        src={image}
        alt=""
        width={0}
        height={0}
        className="w-full max-w-[600px] h-auto"
      />
      <div className="p-4 flex flex-col items-center mt-6">
        <h2 className="text-[1rem] font-semibold">Full name</h2>
        <p className="text-[#636ae8] mt-2">Professional title</p>
        <p className="text-[1.2rem] text-gray-500 text-center mt-2">
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
export { OurTeamCard };

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DoctorsCardsType, ReportCardsType, TeamMembersType } from "@/types/types";


const ReportsCards: React.FC <ReportCardsType> = ({ description, booking }) => {
  return (
    <div className="grid grid-rows-1 py-8 justify-items-center rounded-[15px] overflow-hidden dark:bg-sidebar shadow-md">
      <Image
        src="/file article 1.svg"
        alt=""
        width={70}
        height={0}
        className="bg-[#FDF5F1] text-white  rounded-[25%] p-2"
      />
      <h1 className="text-[18px] mt-2">{description}</h1>
      <button className="bg-[#F3F4F6]  hover:bg-[#064e3b] dark:hover:bg-slate-500 text-black hover:text-white font-semibold px-[3rem] py-2 rounded-[12px] mt-2 ">
        {booking}
      </button>
    </div>
  );
};
export {ReportsCards}

const DoctorsCard: React.FC<DoctorsCardsType> = ({ title, description, imageSrc }) => {
  return (
    <div className="grid grid-rows-1 rounded-[15px] max-w-[500px] overflow-hidden dark:bg-sidebar shadow-md">
      <Image
        src={imageSrc}
        alt=""
        width={0}
        height={0}
        className="w-full max-w-[600px]"
      />
      <div className="p-4 flex flex-col items-start mt-4">
        <h1 className="text-[24px] font-semibold">{title}</h1>
        <h2 className="text-primary_Clr text-xl mt-2">{description}</h2>
        <p className="text-gray-500 dark:text-white w-[17rem] text-xl mt-2">
          Commodo qui nulla ipsum ea cupidatat sit aliquip dolor.
        </p>
        <Link href="/bookingForm">
          <button className="bg-[#064e3b] text-white text-[16px] px-[3rem] py-2 rounded-[5px] mt-4">
            Book Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};
  
export {DoctorsCard}

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
export {OurTeamCard}
"use client";
import { getCookie } from "cookies-next";
import Image from "next/image";
import React from "react";

const BookDoctorHeader = () => {
  const user = getCookie("user");
  const currentUser = user ? JSON.parse(user as string) : null;

  return (
    <>
      <section className="lg:relative pt-8">
        <div className="bg-[#f3f4f6] dark:bg-sidebar pt-8 lg:py-[2.6rem] rounded-lg max-lg:justify-items-center px-12">
          <div className="text-center lg:text-left">
            <h1 className="text-[25px] md:text-[55px] font-semibold max-w-[35rem] leading-none">
              Welcome back&nbsp;
              <span className="text-[#064e3b]">{currentUser?.firstName}</span>
            </h1>
            <p className="text-[#000] text-[1rem] md:text-[1.5rem] pt-3 w-full md:w-[30rem] dark:text-white">
              Book a doctor to check your health status, and always stay safe
              and healthy in your studies.
            </p>
          </div>
          <Image
            src="/doctor_illu.svg"
            alt="doctor"
            width={0}
            height={0}
            className="w-[250px] xl:w-[350px] lg:w-[300px] lg:absolute top-0 right-[5%] "
          />
        </div>
      </section>
    </>
  );
};

export default BookDoctorHeader;

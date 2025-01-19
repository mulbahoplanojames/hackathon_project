import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const OurVision = () => {
  return (
    <>
      <section className="md:px-20 px-4 md:py-16 py-4 grid md:grid-cols-2 grid-cols-1 gap-10 place-items-center">
        <div className="p-2 w-full">
          <h1 className="md:text-5xl text-4xl font-semibold pb-6 ">
            Our Vision
          </h1>
          <p className="text-lg font-normal  pb-6">
            We aim to revolutionize education by providing integrated tools for
            tracking performance and promoting holistic development. Our vision
            is to empower students to take control of their learning journey and
            achieve academic success.
          </p>
          <Link href="/team">
            <Button className="text-base">View our Team</Button>
          </Link>
        </div>
        <div className=" lg:h-[500px] md:h-[450px] h-[400px] w-full md:w-[90%] rounded-lg overflow-hidden relative  ">
          <Image src="/hero.svg" alt="Our vision image of students" fill />
        </div>
      </section>
    </>
  );
};

export default OurVision;

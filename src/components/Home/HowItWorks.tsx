import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { howItWorksData } from "@/constant/howItWorksData";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <>
      <section className="md:px-20 px-4 md:pb-28 pb-16 pt-12 py-4">
        <h1 className="md:text-5xl text-4xl font-semibold pb-4 text-center">
          How it works
        </h1>
        <p className="text-lg font-normal  pb-6 text-center">
          Discover the simple steps to maximize your learning potential with our
          platform.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {howItWorksData.map((data) => (
            <Card key={data.id}>
              <CardContent>
                <CardHeader className="bg-primary_Clr h-56 rounded-3xl mt-4 relative overflow-hidden">
                  <Image src={data.image} alt={data.title} fill />
                </CardHeader>
                <CardDescription className="text-center">
                  <p className="text-primary_Clr pb-2 text-xl pt-3">
                    {data.step}:{data.title}
                  </p>
                  <p>{data.description}</p>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default HowItWorks;

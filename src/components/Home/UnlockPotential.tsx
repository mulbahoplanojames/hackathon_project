import { unlockPotentialData } from "@/constant/constants";
import { Button } from "../ui/button";
import Image from "next/image";

const UnlockPotential = () => {
  return (
    <>
      <section className="md:px-20 px-4 md:pb-24 pb-16  grid md:grid-cols-2 grid-cols-1 gap-8 place-items-center">
        <div className="w-full">
          <h1 className="md:text-5xl text-4xl pb-4">Unlock Your Potential</h1>
          <p className="text-lg pb-6">
            Join a community dedicated to fostering academic success and
            personal growth through innovative tools.
          </p>
          <Button className="bg-primary_Clr text-white hover:bg-primary_Clr hover:opacity-80">
            Join Us Today
          </Button>
        </div>
        <div className="w-full grid place-items-center grid-cols-3 gap-4 p-2">
          {unlockPotentialData.map((data) => (
            <div key={data.id} className="group">
              <Image
                src={data.Image}
                alt={data.title}
                width={160}
                height={160}
                className="rounded-lg "
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default UnlockPotential;

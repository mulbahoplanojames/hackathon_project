import { cn } from "@/lib/utils";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const HomeHero = () => {
  return (
    <>
      <div className="w-full rounded-md md:px-20 px-4 md:pt-40 md:pb-28 pb-20 py-32 grid md:grid-cols-2 grid-cols-1 gap-8 dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative overflow-hidden place-items-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-left  w-full">
          <Text />
          <h1 className="text-4xl lg:text-7xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-primary_Clr to-neutral-400 bg-opacity-90">
            Empower Your Learning Journey
          </h1>
          <p className="my-6 font-normal text-base md:text-lg dark:text-neutral-300 text-neutral-800 ">
            A platform designed to enhance academic success and well-being.
            Track your progress, set goals, and access resources to help you
            succeed.
          </p>
          <Button className="bg-primary_Clr text-white opacity-80 hover:bg-primary_Clr">
            Get Started Now
          </Button>
        </div>
        <div className="w-full md:w-[90%] bg-yellow- relative  md:h-[380px] h-[300px] rounded-md overflow-hidden">
          <Image src="/homehero1.png" alt="hero image" fill />
        </div>
      </div>
    </>
  );
};

export default HomeHero;

const Text = () => {
  return (
    <AnimatedGradientText className="group-hover:shadow-[inset_0_-5px_10px_#8fdfff3f] mb-6">
      🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-primary_Clr" />
      <span
        className={cn(
          `inline animate-gradient bg-gradient-to-r from-[#064E3B] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
        )}
      >
        Introducing Student Performance Hub
      </span>
      <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </AnimatedGradientText>
  );
};

import { cn } from "@/lib/utils";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription } from "../ui/card";
import { keyFeaturesData } from "@/constant/constants";

const KeyFeatures = () => {
  return (
    <>
      <section className="md:px-20 px-4 md:pb-32 pt-4 py-4">
        <Text />
        <h1 className="lg:text-5xl text-4xl pb-5 font-semibold">
          Interactive Dashboard
        </h1>
        <p className="text-lg pb-8 md:w-1/2 w-full">
          Monitor your academic progress with real-time analytics and
          personalized insights tailored to your needs.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {keyFeaturesData.map((feature) => (
            <Card key={feature.id} className="hover:scale-95">
              <CardContent>
                <feature.icon className="bg-green-200 text-primary_Clr p-2 size-10 rounded-full mt-4 " />
                <CardDescription>
                  <p className="text-primary_Clr pb-2 text-lg pt-4">
                    {feature.title}:{feature.title}
                  </p>
                  <p>{feature.description}</p>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

const Text = () => {
  return (
    <AnimatedGradientText className="group-hover:shadow-[inset_0_-5px_10px_#8fdfff3f] mb-6">
      🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-primary_Clr" />
      <span
        className={cn(
          `inline animate-gradient bg-gradient-to-r from-[#064E3B] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
        )}
      >
        Key Features
      </span>
      <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </AnimatedGradientText>
  );
};

export default KeyFeatures;

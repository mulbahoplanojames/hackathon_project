import { dashBoardData } from "@/constant/dashBoardData";
import { Card, CardContent } from "../ui/card";
import NumberTicker from "../ui/number-ticker";

const CardsWripper = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-2 gap-4 md:mt-6 mt-3">
        {dashBoardData.map((item) => (
          <Card
            key={item.id}
            style={{ background: `${item.color}` }}
            className="rounded-3xl border-0"
          >
            <CardContent className="py-3">
              <div className="flex gap-3  flex-col">
                <div
                  className="md:w-14 md:h-14 w-16 h-10 rounded-xl  text-white flex justify-center items-center"
                  style={{ background: `${item.bgColor}` }}
                >
                  <item.icon className="size-8" />
                </div>
                <div className="">
                  <p className="whitespace-pre-wrap  font-bold tracking-tighter text-black dark:text-white text-2xl md:text-3xl pb-1 ">
                    <NumberTicker value={item.count} /> {item.attr}
                  </p>
                  <p className="md:text-xl text-base pb-1">{item.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CardsWripper;

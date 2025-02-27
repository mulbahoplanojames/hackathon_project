import { dashBoardData } from "@/constant/dashboard-home/dashBoardData";
import { Card, CardContent } from "../ui/card";
import NumberTicker from "../ui/number-ticker";

const CardsWripper = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-4 md:mt-6 mt-3">
        {dashBoardData.map((item) => (
          <Card
            key={item.id}
            className="rounded-3xl  cursor-pointer border-primary_Clr border"
          >
            <CardContent className="py-3">
              <div className="flex gap-3  flex-col">
                <div
                  className="md:w-14 md:h-14 w-12 h-10 rounded-xl  text-white flex justify-center items-center"
                  style={{ background: `${item.bgColor}` }}
                >
                  <item.icon className="md:size-8 size-6" />
                </div>
                <div className="">
                  <p className="whitespace-pre-wrap  font-bold tracking-tighter text-black dark:text-white text-xl md:text-2xl pb-1 ">
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

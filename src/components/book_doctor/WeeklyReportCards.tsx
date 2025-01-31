import React from "react";
import { ReportsData } from "@/data/doctorData";
import NumberTicker from "../ui/number-ticker";
import { Card } from "../ui/card";
// import { ReportCardsType } from "@/types/type2";

const WeeklyReportCards = () => {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-[35px] font-semibold py-4">Weekly Reports</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  md:gap-8 gap-4">
          {ReportsData.map((item) => (
            <Card
              key={item.id}
              className="grid grid-rows-1 py-3 justify-items-center rounded-[15px] overflow-hidden dark:bg-sidebar shadow-md"
            >
              <div className="flex items-center justify-center w-10 h-10  mx-auto mt-6 mb-2">
                {typeof item.icon === "string" ? (
                  item.icon
                ) : (
                  <item.icon className="size-14" />
                )}
              </div>
              <h1 className="text-[18px] mt-2">{item.description}</h1>
              <NumberTicker
                value={item.booking}
                className="mt-4 text-2xl font-bold"
              />
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default WeeklyReportCards;

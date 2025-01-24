import React from "react";
import { ReportsCards } from "../doctor_teamCards";
import { ReportsData } from "@/data/doctorData";
import { ReportCardsType } from "@/types/type2";

const WeeklyReportCards = () => {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-[35px] font-semibold py-4">Weekly Reports</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-[2.5rem]">
          {ReportsData.map((card: ReportCardsType) => (
            <ReportsCards
              key={card.id}
              description={card.description}
              booking={card.booking}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default WeeklyReportCards;

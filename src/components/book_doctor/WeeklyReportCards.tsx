import React from "react";
import { ReportsCards } from "../doctor_teamCards";
import { ReportsData } from "@/data/doctorData";

const WeeklyReportCards = () => {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-[35px] font-semibold py-4">Weekly Reports</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-[2.5rem]">
          {ReportsData.map((card, index) => (
            <ReportsCards
              key={index}
              description={card.description}
              booking={card.booking}
              icon={card.icon}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default WeeklyReportCards;

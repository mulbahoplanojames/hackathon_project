import DashboardHeader from "@/components/dashboard-header";
import React from "react";
import MarkSheetTable from "@/components/MarkSheetTable";

const MarkSheetPage = () => {
  return (
    <>
      <section className="p-4 pt-3">
        <DashboardHeader text="Mark Sheet" />
        <MarkSheetTable />
      </section>
    </>
  );
};

export default MarkSheetPage;

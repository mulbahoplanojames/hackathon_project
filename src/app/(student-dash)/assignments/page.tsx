"use client";
import AssignmentTable from "@/components/assignment-table";
import DashboardHeader from "@/components/dashboard-header";

const Assignments = () => {
  return (
    <>
      <section className="p-4 pt-3">
        <DashboardHeader text="Assignments" />

        <div className=" grid md:grid-cols-4 grid-cols-1 gap-10">
          <AssignmentTable />
        </div>
      </section>
    </>
  );
};

export default Assignments;

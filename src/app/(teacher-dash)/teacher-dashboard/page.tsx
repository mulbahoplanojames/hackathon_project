import DashboardHeader from "@/components/dashboard-header";
import { ChartPieWorkHours } from "../components/pie-chart-1";
import GroupCards from "../components/group-cards";
import AddTask from "../components/add-task";
import Courses from "../components/course";

export default function TeacherDashboard() {
  return (
    <section className="p-4 pt-3">
      <DashboardHeader text="Teacher Dashboard" />
      <div className=" w-full h-fit">
        <h1 className=" text-3xl  pb-3  pt-2">Welcome Back, Mr. James</h1>
        <p className="pb-2 text-lg ">
          Your students completed <span className="text-red-700">80%</span> of
          their tasks.{" "}
        </p>
        <p className="pb-3 text-lg ">
          Progress is <span className="text-red-700"> very good !</span>
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-8 md:px-1">
        <ChartPieWorkHours />
        <GroupCards />
      </div>
      <div className="grid md:grid-cols-3 place-items-center grid-cols-1 gap-10 mt-8 md:px-1">
        <AddTask />
        <Courses />
      </div>
    </section>
  );
}

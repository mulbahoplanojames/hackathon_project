import DashboardHeader from "@/components/dashboard-header";
import CardsWripper from "@/components/Home_dashboard/CardWripper";
import { ChartBar1 } from "@/components/Home_dashboard/charts/bar-chart-1";
import { ChartBar2 } from "@/components/Home_dashboard/charts/bar-chart-2";
import { ChartPie } from "@/components/Home_dashboard/charts/pie-chart";
import StudentAddTask from "@/components/Home_dashboard/student-add-task";
import TeacherTable from "@/components/Home_dashboard/teacher-table";
import WebinarCard from "@/components/Home_dashboard/webinar-card";
import WelcomeUser from "@/components/Home_dashboard/WelcomeUser";

export default function Page() {
  return (
    <>
      <section className="p-4 pt-3">
        <DashboardHeader text="Dashboard" />
        <WelcomeUser />
        <CardsWripper />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-12 md:px-1">
          <ChartBar1 text="This week performance" />
          <ChartBar2 text="Statistics" />
        </div>
        <div className="pt-10">
          <StudentAddTask />
        </div>
        <div className=" grid md:grid-cols-4 grid-cols-1 gap-10">
          <TeacherTable />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-12 md:px-1">
          <ChartPie />
          <WebinarCard />
        </div>
      </section>
    </>
  );
}

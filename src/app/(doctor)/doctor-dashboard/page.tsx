import DashboardHeader from "@/components/dashboard-header";
import DoctorWelcome from "../components/ui/DoctorWelcome";

const DoctorDashPage = () => {
  return (
    <>
      <section className="p-4 pt-3">
        <DashboardHeader text="Doctor Dashboard" />
        <DoctorWelcome />
      </section>
    </>
  );
};

export default DoctorDashPage;

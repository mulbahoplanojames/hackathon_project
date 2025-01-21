import DashboardHeader from "@/components/dashboard-header";
import React from "react";
import Appointments from "../components/ui/Appointments";

const DoctorAppointmentPage = () => {
  return (
    <>
      <section className="p-4 pt-3">
        <DashboardHeader text="Appointments" />
        <Appointments />
      </section>
    </>
  );
};

export default DoctorAppointmentPage;

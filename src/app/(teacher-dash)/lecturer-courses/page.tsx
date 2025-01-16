import DashboardHeader from "@/components/dashboard-header";
import React from "react";
import TeacherWelcome from "../components/ui/TeacherWelcome";

const LecturerCoursePage = () => {
  return (
    <>
      <section className="p-4 pt-3">
        <DashboardHeader text="Lecturer Courses" />
        <TeacherWelcome />
      </section>
    </>
  );
};

export default LecturerCoursePage;

import DashboardHeader from "@/components/dashboard-header";
import AllCourses from "@/components/courses/AllCourses";
import CourseWelcome from "@/components/courses/CourseWelcome";
import CoursesPeriodCards from "@/components/courses/CoursesPeriodCards";

const Courses = () => {
  return (
    <>
      <section className="p-4 pt-3">
        <DashboardHeader text="Courses" />
        <CourseWelcome />
        <CoursesPeriodCards />
        <AllCourses />
      </section>
    </>
  );
};

export default Courses;

import { OnlineCoursesData, CoursesPeriodData } from "@/data/coursesData";
import {
  CoursesCards,
  CoursePeriodCard,
} from "../../../components/courses-cards";
import { Button } from "@/components/ui/button";
import DashboardHeader from "@/components/dashboard-header";
import AllCourses from "@/components/courses/AllCourses";

const Courses = () => {
  return (
    <>
      <section className="p-4 pt-3">
        <DashboardHeader text="Courses" />
        <CoursesPeriod />
        <AllCourses />
        <OnlineCoursesCards />
      </section>
    </>
  );
};

export default Courses;

function CoursesPeriod() {
  return (
    <section>
      <div className="pb-12">
        <h1 className="mobile:text-[2rem] text-5xl sm:text-6xl">
          Hi, <span className="text-[#118264]">Student!</span>
        </h1>
        <h1 className="mobile:text-[2rem] text-5xl sm:text-6xl">
          What do you want
        </h1>
        <h1 className="mobile:text-[2rem] text-5xl sm:text-6xl">
          to <span className="text-[#118264]">learn</span> today
        </h1>
      </div>
      <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 ">
        {CoursesPeriodData.map((course, index) => {
          return (
            <CoursePeriodCard
              key={index}
              iconUrl={course.iconUrl}
              status={course.status}
              numberOfTime={course.numberOfTime}
            />
          );
        })}
      </div>
    </section>
  );
}

function OnlineCoursesCards() {
  return (
    <article className="md:py-14 py-8">
      <h1 className="text-3xl font-[600] py-6">Online Courses</h1>
      <div className="grid auto-rows-min gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
        {OnlineCoursesData.map((course, index) => {
          return (
            <CoursesCards
              key={index}
              imageUrl={course.imageUrl}
              title={course.title}
              description={course.description}
              created_at={course.created_at}
            />
          );
        })}
      </div>
      <section className="flex justify-center items-center pt-8">
        <Button className="bg-[#064E3B] text-lg dark:text-white dark:hover:text-black py-6 rounded-lg">
          Load More Course
        </Button>
      </section>
    </article>
  );
}

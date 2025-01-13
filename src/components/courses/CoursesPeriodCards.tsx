import { CoursesPeriodData } from "@/data/coursesData";
import { CoursePeriodCard } from "./CoursePeriodSingleCard";

const CoursesPeriodCards = () => {
  return (
    <>
      <section>
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
    </>
  );
};

export default CoursesPeriodCards;

import { CoursesData, CoursesPeriod } from "@/data/coursesData";
import { CoursesCards, CoursePeriodCard } from "../../../components/courses-cards";
import { Button } from "@/components/ui/button";

const Courses = () => {
  return (
    <>
      <h1 className="text-2xl px-10 py-2">Courses</h1>
      <section className="lg:p-10 sm:p-6 max-sm:p-6 md:p-8 pt-0">
        <div className='pb-12'>
          <h1 className='text-6xl max-sm:text-5xl'>Hi, <span className='text-[#064E3B]'>Student!</span></h1>
          <h1 className='text-6xl max-sm:text-5xl'>What do you want</h1>
          <h1 className='text-6xl max-sm:text-5xl'>to <span className='text-[#064E3B]'>learn</span> today</h1>
        </div>
        <div className='grid gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1'>
          {
            CoursesPeriod.map((course, index) => {
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
      <div className="lg:p-10 sm:p-6 max-sm:p-6 md:p-8 pt-0">
        <h1 className="text-3xl font-[600] py-6">Popular Courses</h1>
        <div className="grid auto-rows-min gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {CoursesData.map((course, index) => {
            return (
              <CoursesCards
                key={index}
                imageUrl={course.imageUrl}
                title={course.title}
                description={course.description}
                date={course.date}
                views={course.views}
              />
            );
          })}
        </div>
      </div>
      <div className="lg:p-10 pt-0 sm:p-6 max-sm:p-6 md:p-8">
        <h1 className="text-3xl font-[600] py-6">Ongoing Courses</h1>
        <div className="grid auto-rows-min gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {CoursesData.map((course, index) => {
            return (
              <CoursesCards
                key={index}
                imageUrl={course.imageUrl}
                title={course.title}
                description={course.description}
                date={course.date}
                views={course.views}
              />
            );
          })}
        </div>
        <section className='flex justify-center items-center pt-8'>
          <Button className='bg-[#064E3B] dark:text-white dark:hover:text-black'>Load More Course</Button>
        </section>
      </div>
    </>
  );
};

export default Courses;

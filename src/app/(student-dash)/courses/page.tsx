import { OnlineCoursesData, PopularCoursesData, CoursesPeriodData } from "@/data/coursesData";
import { CoursesCards, CoursePeriodCard } from "../../../components/courses-cards";
import { Button } from "@/components/ui/button";

const Courses = () => {
  return (
    <>
      <h1 className="text-4xl px-6 py-2">Courses</h1>
      <CoursesPeriod/>
      <PopularCoursesCards/>
      <OnlineCoursesCards/>
    </>
  );
};

export default Courses;

function CoursesPeriod(){
  return(
    <section className="lg:p-10 p-6 md:p-8">
      <div className='pb-12'>
        <h1 className='mobile:text-[2rem] text-5xl sm:text-6xl'>Hi, <span className='text-[#118264]'>Student!</span></h1>
        <h1 className='mobile:text-[2rem] text-5xl sm:text-6xl'>What do you want</h1>
        <h1 className='mobile:text-[2rem] text-5xl sm:text-6xl'>to <span className='text-[#118264]'>learn</span> today</h1>
      </div>
      <div className='grid gap-4 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 '>
        {
          CoursesPeriodData.map((course, index) => {
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
  )
}

function PopularCoursesCards(){
  return(
    <article className="lg:p-10 pt-0 p-6 md:p-8">
      <h1 className="text-3xl font-[600] py-6">Popular Courses</h1>
      <div className="grid auto-rows-min gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
        {PopularCoursesData.map((course, index) => {
          return (
            <CoursesCards
              key={index}
              imageUrl={course.imageUrl}
              title={course.title}
              description={course.description}
              date={course.date}
              views={course.views} />
          );
        })}
      </div>
      <section className='flex justify-center items-center pt-8'>
        <Button className='bg-[#064E3B] text-xl dark:text-white dark:hover:text-black p-7 rounded-2xl'>Load More Course</Button>
      </section>
    </article>
  )
}

function OnlineCoursesCards(){
  return(
    <article className="lg:p-10 pt-0 p-6 md:p-8">
      <h1 className="text-3xl font-[600] py-6">Online Courses</h1>
      <div className="grid auto-rows-min gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
        {OnlineCoursesData.map((course, index) => {
          return (
            <CoursesCards
              key={index}
              imageUrl={course.imageUrl}
              title={course.title}
              description={course.description}
              date={course.date}
              views={course.views} />
          );
        })}
      </div>
      <section className='flex justify-center items-center pt-8'>
        <Button className='bg-[#064E3B] text-xl dark:text-white dark:hover:text-black p-7 rounded-2xl'>Load More Course</Button>
      </section>
    </article>
  )
}
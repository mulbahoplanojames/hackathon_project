import React from "react";
import { CoursesCards } from "../courses-cards";
import { Button } from "../ui/button";
import axios from "axios";
import { CoursesType } from "@/types/types";

const getAllCourses = async () => {
  try {
    const response = await axios.get("http:///localhost:8000/api/courses");
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error fetching courses:", error);
  }
};

const AllCourses = async () => {
  const courses = await getAllCourses();
  //   console.log(courses);

  return (
    <>
      <section className="md:py-14 py-8">
        <h1 className="text-3xl font-[600] py-6">Popular Courses</h1>
        <div className="grid auto-rows-min gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {courses.map((course: CoursesType) => {
            return (
              <CoursesCards
                key={course.title}
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
      </section>
    </>
  );
};

export default AllCourses;

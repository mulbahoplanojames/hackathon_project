"use client";

import React from "react";
import { Button } from "../ui/button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CoursesType } from "@/types/types";
import { CoursesCard } from "./CourseCard";
import { Skeleton } from "../ui/skeleton";

const getAllCourses = async (limit: number, lastVisibleCourseId?: string) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/courses?limit=${limit}${lastVisibleCourseId ? `&lastVisibleCourse=${lastVisibleCourseId}` : ""}`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error fetching courses:", error);
  }
};

const AllCourses = () => {
  const queryClient = useQueryClient();
  const {
    data: courses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["all-courses"],
    queryFn: () => getAllCourses(8),
  });

  const skeletonCourses = Array.from({ length: 8 }, (_, index) => ({
    id: `skeleton-${index}`,
    title: `Skeleton Course ${index + 1}`,
    description: `Skeleton description for Course ${index + 1}`,
  }));

  if (isLoading) {
    return (
      <section className="md:py-20 py-8">
        <Skeleton className="h-[30px] w-[250px] rounded-xl mb-4" />
        <div className="grid auto-rows-min gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 ">
          {skeletonCourses.map((course, index) => (
            <div key={index}>
              <Skeleton className="h-[150px] w-[250px] rounded-xl" />
              <div className="space-y-3 mt-4">
                <Skeleton className="h-4 w-[170px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[170px]" />
                <Skeleton className="h-6 w-[250px]" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
      </div>
    );
  }

  const loadMoreCourses = async () => {
    if (!courses?.length) return;
    const lastVisibleCourse = courses[courses.length - 1];
    const nextCourses = await getAllCourses(8, lastVisibleCourse.id);
    if (nextCourses.length === 0) return;
    const newCourses = nextCourses.filter(
      (course: CoursesType) =>
        !courses.some((c: CoursesType) => c.id === course.id)
    );
    queryClient.setQueryData(["all-courses"], [...courses, ...newCourses]);
  };

  return (
    <>
      <section className="md:py-14 py-8">
        <h1 className="text-3xl font-[600] py-6">Popular Courses</h1>
        <div className="grid auto-rows-min gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {courses?.map((course: CoursesType) => (
            <CoursesCard
              key={course.title}
              imageUrl={course.imageUrl}
              id={course.id}
              title={course.title}
              description={course.description}
              created_at={course.created_at}
            />
          ))}
        </div>
        {courses?.length > 0 && courses?.length % 8 === 0 && (
          <section className="flex justify-center items-center pt-8">
            <Button
              className="bg-[#064E3B] text-lg dark:text-white dark:hover:text-black py-6 rounded-lg"
              onClick={loadMoreCourses}
            >
              Load More Courses
            </Button>
          </section>
        )}
      </section>
    </>
  );
};

export default AllCourses;

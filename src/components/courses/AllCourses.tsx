"use client";

import React, { useEffect } from "react";
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
    return response.data;
  } catch (error) {
    console.log("Error fetching courses:", error);
    return [];
  }
};

const AllCourses = () => {
  const queryClient = useQueryClient();
  const {
    data: courses = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["all-courses", { limit: 8 }],
    queryFn: () => getAllCourses(8),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 3000);

    return () => clearInterval(interval);
  }, [refetch]);

  const loadMoreCourses = async () => {
    if (!courses.length) return;
    const lastVisibleCourse = courses[courses.length - 1];
    const nextCourses = await getAllCourses(8, lastVisibleCourse.id);
    queryClient.setQueryData(["all-courses"], [...courses, ...nextCourses]);
  };

  if (isLoading) {
    return (
      <section className="md:py-20 py-8">
        <Skeleton className="h-[30px] w-[250px] rounded-xl mb-4" />
        <div className="grid auto-rows-min gap-8 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {Array.from({ length: 8 }).map((_, index) => (
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
      <section className="pb-5 p-4 pt-3 h-52 flex items-center justify-center">
        <p className="text-red-500 text-2xl">Error loading enrolled courses</p>
        <Button
          className="bg-[#064E3B] text-lg dark:text-white dark:hover:text-black py-6 rounded-lg"
          onClick={() => refetch()}
        >
          Retry
        </Button>
      </section>
    );
  }

  return (
    <section className="md:py-14 py-8">
      <h1 className="text-3xl font-[600] py-6">View All Courses</h1>
      <div className="grid auto-rows-min gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
        {courses.map((course: CoursesType) => (
          <CoursesCard
            key={course.id}
            avater={course.avater}
            id={course.id}
            title={course.title}
            description={course.description}
            created_at={course.created_at}
          />
        ))}
      </div>
      {courses.length % 8 === 0 && (
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
  );
};

export default AllCourses;

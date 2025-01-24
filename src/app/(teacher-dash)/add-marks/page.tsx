"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ModuleCard } from "../components/ui/ModuleCard";
import { CoursesType } from "@/types/types";
import DashboardHeader from "@/components/dashboard-header";

const fectchCourses = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/courses");
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error fetching courses:", error);
  }
};

const AddMarksPage = () => {
  const {
    data: courses,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: () => fectchCourses(),
  });
  console.log("Courses:", courses);

  if (isLoading) {
    return (
      <section className="md:pb-20 md:pt-10 py-6 md:px-10 px-3">
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
    <>
      <section className="p-4 pt-3">
        <DashboardHeader text="Add Marks" />
        <div className="grid auto-rows-min gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {courses?.map((course: CoursesType) => (
            <ModuleCard
              key={course?.id}
              avater={course?.avater}
              id={course?.id}
              title={course?.title}
              description={course?.description}
              created_at={course?.created_at}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AddMarksPage;

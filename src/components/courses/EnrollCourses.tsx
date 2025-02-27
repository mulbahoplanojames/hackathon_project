"use client";

import { Button } from "../ui/button";
import axios from "axios";
import { CoursesType } from "@/types/types";
import { getCookie } from "cookies-next";
import { EnrolledCoursesCard } from "./EnrolledCourseCard";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import { useEffect, useState } from "react";

const user = getCookie("user");
const currentUser = user ? JSON.parse(user as string) : null;

const fetchCourses = async () => {
  const response = await axios.get(
    `http://localhost:8000/api/courses/user/${currentUser?.id}}`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const data = await response.data;
  return data;
};

const EnrolledCourses = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["enroll-courses", currentUser?.id],
    queryFn: () => fetchCourses(),
  });

  const [courses, setCourses] = useState(data);
  const [isVisible, setIsVisible] = useState(8);

  const showMoreItems = () => {
    setIsVisible((prev) => prev + 4);
  };

  useEffect(() => {
    setCourses(data?.slice(0, isVisible));
  }, [isVisible, data]);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 3000);

    return () => clearInterval(interval);
  }, [refetch]);

  if (isLoading) {
    return (
      <section className="pb-5 p-4 pt-3">
        <Skeleton className="h-[30px] md:w-[250px] w-full rounded-xl mb-4" />
        <div className="grid auto-rows-min gap-8 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index}>
              <Skeleton className="h-[150px] w-[250px] rounded-xl" />
              <div className="space-y-3 mt-4">
                <Skeleton className="h-4 md:w-[170px] w-full" />
                <Skeleton className="h-4 md:w-[200px] w-full" />
                <Skeleton className="h-4 md:w-[170px] w-full" />
                <Skeleton className="h-6 md:w-[250px] w-full" />
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
        <h1 className="text-3xl font-[600] py-6">Enrolled Courses</h1>
        <div className="grid auto-rows-min gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {courses?.length > 0 ? (
            courses
              ?.slice(0, isVisible)
              ?.map((course: CoursesType) => (
                <EnrolledCoursesCard
                  key={course?.title}
                  avater={course?.avater}
                  id={course?.id}
                  title={course?.title}
                  description={course?.description}
                  created_at={course?.created_at}
                />
              ))
          ) : (
            <div className="flex justify-center items-center py-5">
              <p className="text-red-500 text-2xl">
                You haven&apos;t enrolled in any course yet
              </p>
            </div>
          )}
        </div>

        <section className="flex justify-center items-center pt-8">
          {data?.length > isVisible && (
            <Button
              className="bg-[#064E3B] text-lg dark:text-white dark:hover:text-black py-6 rounded-lg"
              onClick={showMoreItems}
            >
              Load More Courses
            </Button>
          )}
        </section>
      </section>
    </>
  );
};

export default EnrolledCourses;

"use client";

import { Button } from "../ui/button";
import axios from "axios";
import { CoursesType } from "@/types/types";
import { getCookie } from "cookies-next";
import { EnrolledCoursesCard } from "./EnrolledCourseCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";

const user = getCookie("user");
const currentUser = user ? JSON.parse(user as string) : null;

const fetchCourses = async (limit: number, lastVisibleCourseId?: string) => {
  const response = await axios.get(
    `http://localhost:8000/api/courses/user/${currentUser?.id}?limit=${limit}${lastVisibleCourseId ? `&lastVisibleCourse=${lastVisibleCourseId}` : ""}`,
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
  const {
    data: courses,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["enroll-courses", currentUser?.id],
    queryFn: () => fetchCourses(8),
  });

  const queryClient = useQueryClient();

  const loadMoreCourses = async () => {
    const lastVisibleCourse = courses?.[courses.length - 1];
    const nextCourses = await fetchCourses(4, lastVisibleCourse?.id);
    queryClient.setQueryData(
      ["courses", currentUser?.id],
      [...(courses || []), ...nextCourses]
    );
  };

  if (isLoading) {
    return (
      <section className="pb-5 p-4 pt-3">
        <Skeleton className="h-[30px] w-[250px] rounded-xl mb-4" />
        <div className="grid auto-rows-min gap-8 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {Array.from({ length: 8 }, (_, index) => (
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
        <h1 className="text-3xl font-[600] py-6">Enrolled Courses</h1>
        <div className="grid auto-rows-min gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {courses?.map((course: CoursesType) => (
            <EnrolledCoursesCard
              key={course?.title}
              avater={course?.avater}
              id={course?.id}
              title={course?.title}
              description={course?.description}
              created_at={course?.created_at}
            />
          ))}
        </div>
        {courses?.length >= 8 && (
          <section className="flex justify-center items-center pt-8">
            {" "}
            200 in 249ms
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

export default EnrolledCourses;

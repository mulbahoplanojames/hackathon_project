"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { CoursesType } from "@/types/types";
import { getCookie } from "cookies-next";
import { EnrolledCoursesCard } from "./EnrolledCourseCard";

const user = getCookie("user");
const currentUser = user ? JSON.parse(user as string) : null;

const getAllCourses = async () => {
  try {
    const response = await axios.get(`/api/courses/user/${currentUser?.id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await response.data;
    console.log("Courses Data:", data);

    return data;
  } catch (error) {
    console.log("Error fetching courses:", error);
  }
};

const EnrolledCourses = () => {
  const [courses, setCourses] = useState<CoursesType[]>([]);
  const [visibleCourses, setVisibleCourses] = useState<number>(8);

  useEffect(() => {
    const fetchCourses = async () => {
      const allCourses = await getAllCourses();
      setCourses(allCourses);
    };
    fetchCourses();
  }, []);

  const loadMoreCourses = () => {
    setVisibleCourses((prevVisibleCourses) => prevVisibleCourses + 4);
  };

  return (
    <>
      <section className="p-4 pt-3">
        <h1 className="text-3xl font-[600] py-6">Enrolled Courses</h1>
        <div className="grid auto-rows-min gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {courses
            ?.slice(0, visibleCourses)
            .map((course: CoursesType) => (
              <EnrolledCoursesCard
                key={course?.title}
                imageUrl={course?.imageUrl}
                id={course?.id}
                title={course?.title}
                description={course?.description}
                created_at={course?.created_at}
              />
            ))}
        </div>
        {visibleCourses < courses?.length && (
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

export default EnrolledCourses;

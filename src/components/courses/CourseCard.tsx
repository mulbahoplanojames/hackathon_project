"use client";
import { CoursesType } from "@/types/types";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { getCookie } from "cookies-next";

const user = getCookie("user");
const currentUser = user ? JSON.parse(user as string) : null;

interface EnrollInCourseButtonProps {
  user_id: string;
  course_id: string;
}

const handleEnrollInCourse = async ({
  user_id,
  course_id,
}: EnrollInCourseButtonProps) => {
  try {
    const response = await axios.post(
      `
      http://localhost:8000/api/users/assign-course`,
      {
        user_id,
        course_id,
      }
    );
    const data = await response.data;
    // console.log("Response:", response);
    console.log(data);
    if (response.status === 200 || response.status === 201) {
      toast.success("Enrolled in course successfully");
    } else {
      toast.error("Failed to enroll in course. Please try again.");
    }
    return data;
  } catch (error) {
    console.log("Error enrolling in course:", error);
    toast.error(
      "Already enrolled in course. Please check your enroll courses dashboard."
    );
  }
};

export const CoursesCard = (props: CoursesType) => {
  return (
    <Card className="p-2 rounded-lg shadow-lg h-fit">
      <CardContent className="p-0 h-fit">
        <Link href={`/courses/${props.id}`}>
          <div className="pb-2 h-48 w-[90%] relative overflow-hidden mx-auto my-2 ">
            <Image
              src={props?.avater ? props?.avater : "/courses/course_1.svg"}
              alt={props.title}
              fill
              className="w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-blue-500 text-lg pb-2 truncate">
              {props.title}
            </h3>
            <p className="text-sm pb-2 px-1">
              {props.description.slice(0, 70)}
            </p>
            <aside className="flex justify-between py-2 gap-4">
              <p className="text-l text-[#8a8a8a]">
                {formatDate(props.created_at)}
              </p>
            </aside>
          </div>
        </Link>
        <Button
          className="w-full"
          onClick={() =>
            handleEnrollInCourse({
              user_id: currentUser?.id,
              course_id: props.id,
            })
          }
        >
          Enroll
        </Button>
      </CardContent>
    </Card>
  );
};

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import axios from "axios";

import Image from "next/image";
import { formatDate } from "@/lib/formatDate";
import { Tags } from "lucide-react";
import { SubmitAssignments } from "@/components/assignments/SubmitAssignments";
import { getCookie } from "cookies-next";

type AssigmentType = {
  id: number;
  course_id: number;
  title: string;
  status: boolean;
  marksObtain: number;
  totalMarks: number;
  created_at: string;
  updated_at: string;
};

const user = getCookie("user");
const currentUser = user ? JSON.parse(user as string) : null;

const fetchCourse = async (id: string) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/courses/user/${currentUser?.id}/${id}`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error fetching course:", error);
  }
};

const SingleCoursePage = async ({
  params,
}: {
  params: { courseId: string };
}) => {
  const course = await fetchCourse(params.courseId);
  // console.log(course);

  return (
    <>
      <section className="px-6 py-8">
        <div className="w-full h-[20rem] md:mb-5 mb-3 rounded-lg bg-slate-100 relative overflow-hidden">
          <Image
            src="/courses/course_1.svg"
            alt={course.title}
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold pb-2">{course.title}</h2>
        <p className="pb-4">{course.description}</p>
        <h2 className="text-xl font-semibold pb-4">
          {course.assigments.length > 0
            ? "Assignments"
            : "No Assignments Available"}
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 pb-8">
          {course.assigments.map((assignment: AssigmentType) => (
            <Card className="" key={assignment.id}>
              <CardContent className="p-3 text-center">
                <Tags
                  className="p-1 bg-primary_Clr rounded-md text-white mb-3 mx-auto"
                  size={40}
                />
                <CardTitle className="pb-2">{assignment.title}</CardTitle>
                <p className="text-l text-[#8a8a8a]">
                  Date: {formatDate(assignment.created_at)}
                </p>
                <p className="py-2">
                  {assignment.status ? "Submitted" : "Not Submitted"}
                </p>
                <SubmitAssignments />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default SingleCoursePage;

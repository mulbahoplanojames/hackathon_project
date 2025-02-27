// Don't need the page to be static because the assignments for the student will be dynamic
export const dynamic = "force-dynamic";

import { SubmitAssignments } from "@/components/assignments/SubmitAssignments";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/formatDate";
// import { CoursesType } from "@/types/types";
import axios from "axios";
import { Tags } from "lucide-react";
import Image from "next/image";

interface Assignment {
  id: string;
  title: string;
  created_at: string;
  status: boolean;
}

// export const generateStaticParams = async () => {
//   const res = await axios.get("http://localhost:8000/api/courses");
//   const data = await res.data;

//   return data?.map((course: CoursesType) => ({ id: course.id.toString() }));
// };

const fetchEnrollCourse = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/courses/${id}`);
    const data = await response.data;
    // console.log("Course Data", data);
    return data;
  } catch (error) {
    console.log("Error fetching enrollCourse:", error);
  }
};

const EnrollCourseSinglePage = async ({
  params,
}: {
  params: { enrollcourseId: string };
}) => {
  const enrollCourse = await fetchEnrollCourse(params.enrollcourseId);

  return (
    <>
      <section className="px-6 py-8">
        <div className="w-full h-[20rem] md:mb-5 mb-3 rounded-lg bg-slate-100 relative overflow-hidden">
          <Image
            src="/courses/course_1.svg"
            alt={enrollCourse.title}
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold pb-2">{enrollCourse.title}</h2>
        <p className="pb-4">{enrollCourse.description}</p>
        <h2 className="text-xl font-semibold pb-4">
          {enrollCourse?.assigments?.length > 0
            ? "Assignments"
            : "No Assignments Available"}
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 pb-8">
          {enrollCourse?.assigments?.map((assignment: Assignment) => (
            <Card className="" key={assignment?.id}>
              <CardContent className="p-3 text-center">
                <Tags
                  className="p-1 bg-primary_Clr rounded-md text-white mb-3 mx-auto"
                  size={40}
                />
                <CardTitle className="pb-2">{assignment?.title}</CardTitle>
                <p className="text-l text-[#8a8a8a]">
                  Date: {formatDate(assignment?.created_at)}
                </p>
                <p className="py-2">
                  {assignment?.status ? "Submitted" : "Not Submitted"}
                </p>

                <SubmitAssignments id={assignment?.id as string} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default EnrollCourseSinglePage;

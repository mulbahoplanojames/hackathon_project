import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CoursesType } from "@/types/types";
import axios from "axios";
import { CircleArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddMarksForm from "../../components/ui/AddMarksForm";
import { UserType } from "@/types/type2";

export const generateStaticParams = async () => {
  const res = await axios.get("http://localhost:8000/api/courses");
  const data = await res.data;

  return data?.map((course: CoursesType) => ({ id: course.id.toString() }));
};

const fetchCourse = async (id: string) => {
  try {
    const response = await axios.get(
      `http:///localhost:8000/api/courses/${id}`
    );
    const data = await response.data;
    // console.log("Single Course Data", data);
    return data;
  } catch (error) {
    console.log("Error fetching course:", error);
  }
};

const AddMarksSinglePage = async ({
  params,
}: {
  params: { addmarksId: string };
}) => {
  const course = await fetchCourse(params.addmarksId);
  return (
    <>
      <section className="px-6 py-8">
        <Link href="/add-marks">
          <CircleArrowLeft className=" md:size-10 size-8 md:mb-6 mb-4" />
        </Link>
        <div className="w-full h-[20rem] md:mb-5 mb-3 rounded-lg bg-slate-100 relative overflow-hidden">
          <Image
            src={course?.avater ? course?.avater : "/courses/course_1.svg"}
            alt={course?.title}
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold pb-2">{course?.title}</h2>
        <p className="pb-4">{course?.description}</p>
        <h2 className="text-xl font-semibold pb-4">
          {course?.users?.length > 0
            ? "Enroll Students"
            : "No Enroll Students Available"}
        </h2>
        <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <TableHeader className="bg-gray-200 dark:bg-gray-800">
            <TableRow>
              <TableCell className="sticky left-0 bg-gray-200 dark:bg-gray-800 font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                #
              </TableCell>
              <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                Name
              </TableCell>
              <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                Email
              </TableCell>
              <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                Roll Number
              </TableCell>
              <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                Phone
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {course?.users?.map((student: UserType) => (
              <AddMarksForm
                key={student.id}
                course_id={params.addmarksId}
                course_name={course?.title}
                student={student}
              />
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
};

export default AddMarksSinglePage;

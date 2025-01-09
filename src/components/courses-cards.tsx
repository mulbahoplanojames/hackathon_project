import Image from "next/image";
import { CoursesType, CoursesPeriodType } from "@/types/types";
import { Card } from "./ui/card";
import { format, isValid, parseISO } from "date-fns";

export const CoursesCards = (props: CoursesType) => {
  const formatDate = (dateString: string) => {
    try {
      if (!dateString) return "Date unavailable";

      const date = parseISO(dateString);

      if (!isValid(date)) {
        return "Invalid date";
      }

      return format(date, "MMMM dd, yyyy");
    } catch (error) {
      console.error("Date formatting error:", error);
      return "Invalid date format";
    }
  };
  return (
    <Card className="p-2 rounded-lg shadow-lg ">
      <div className="pb-2">
        <Image
          src="courses/course_1.svg"
          alt={props.title}
          width={0}
          height={0}
          style={{ width: "100%", maxWidth: "600px", height: "auto" }}
        />
      </div>
      <div>
        <h3 className="text-blue-500 text-lg pb-2">{props.title}</h3>
        <h1 className="text-sm pb-2">{props.description.slice(0, 100)}</h1>
        <aside className="flex justify-between py-2 gap-4">
          <p className="text-l text-[#8a8a8a]">
            {formatDate(props.created_at)}
          </p>
        </aside>
      </div>
    </Card>
  );
};

export const CoursePeriodCard = (props: CoursesPeriodType) => {
  return (
    <div className="border-2 rounded-2xl px-2 mobile:py-3 py-4 dark:bg-sidebar flex flex-col max-sm:items-center">
      <article className="sm:flex sm:items-center grid justify-items-center block ">
        <Image
          src={props.iconUrl}
          alt={props.status}
          width={0}
          height={0}
          className="w-[80px]"
        />
        <h1 className="text-[1.1rem] sm:text-2xl font-[600]">{props.status}</h1>
      </article>
      <h1 className="text-2xl font-[600] text-center sm:text-left pt-2 sm:pl-5">
        {props.numberOfTime}
      </h1>
    </div>
  );
};

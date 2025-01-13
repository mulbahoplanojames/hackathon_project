import Image from "next/image";
import { CoursesType, CoursesPeriodType } from "@/types/types";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { formatDate } from "@/lib/formatDate";

export const CoursesCards = (props: CoursesType) => {
  return (
    <Card className="p-2 rounded-lg shadow-lg h-fit">
      <CardContent className="p-0 h-fit">
        <Link href={`/courses/${props.id}`}>
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
            <h3 className="text-blue-500 text-lg pb-2 truncate">
              {props.title}
            </h3>
            <p className="text-sm pb-2">{props.description.slice(0, 70)}</p>
            <aside className="flex justify-between py-2 gap-4">
              <p className="text-l text-[#8a8a8a]">
                {formatDate(props.created_at)}
              </p>
            </aside>
          </div>
        </Link>
        <Button className="w-full">Enroll</Button>
      </CardContent>
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

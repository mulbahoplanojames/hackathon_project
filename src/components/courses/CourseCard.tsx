import { CoursesType } from "@/types/types";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";

export const CoursesCard = (props: CoursesType) => {
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

"use client";
import { CoursesType } from "@/types/types";
import { Card, CardContent } from "@/components/ui/card";
// import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ModuleCard: React.FC<CoursesType> = ({
  id,
  title,
  avater,
  description,
  created_at,
}) => {
  return (
    <Card className="p-2 rounded-lg shadow-lg h-fit">
      <CardContent className="p-0 h-fit">
        <div className="pb-2 h-48 w-[90%] relative overflow-hidden mx-auto my-2 ">
          <Image
            src={avater ? avater : "/courses/course_1.svg"}
            alt={title}
            fill
            className="w-full h-full"
          />
        </div>
        <div>
          <h3 className="text-blue-500 text-lg pb-2 truncate">{title}</h3>
          <p className="text-sm pb-2 px-1">{description.slice(0, 70)}</p>
          <aside className="flex justify-between py-2 gap-4">
            <p className="text-l text-[#8a8a8a]">{formatDate(created_at)}</p>
          </aside>
        </div>
        <Link href={`/add-marks/${id}`}>
          <Button className="w-full">Add Marks</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

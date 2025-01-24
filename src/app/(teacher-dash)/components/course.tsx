import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AlarmClock, BookmarkCheck, CalendarHeart } from "lucide-react";
import Image from "next/image";

const Courses = () => {
  return (
    <Card className="w-full pt-4">
      <CardContent>
        <div className="w-full h-[200px] relative overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dx2ub50ms/image/upload/v1737655402/course_1_iodxnu.svg"
            alt="Course Thumbnail"
            className="rounded-lg mb-4 w-full object-cover"
            fill
          />
        </div>
        <CardTitle className="text-lg font-semibold pt-3">
          Teaching Character and Creating Positive Classrooms
        </CardTitle>
        <CardDescription className="text-sm text-gray-500 ">
          <div className="flex col gap-2 mt-2 justify-between items-center">
            <p className="flex items-center gap-2">
              <CalendarHeart className="size-4" />4 weeks
            </p>
            <p className="flex items-center gap-2">
              <AlarmClock className="size-4" />
              30 hours
            </p>
            <p className="flex items-center gap-2">
              <BookmarkCheck className="size-4" />5 tasks
            </p>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default Courses;

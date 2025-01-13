import { CoursesPeriodType } from "@/types/types";
import Image from "next/image";
import NumberTicker from "../ui/number-ticker";

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
        <NumberTicker
          value={props.numberOfTime}
          className="text-[1.1rem] sm:text-2xl font-[600]"
        />
      </article>
      <h1 className="text-[1.1rem] sm:text-2xl font-[600]">{props.status}</h1>
    </div>
  );
};

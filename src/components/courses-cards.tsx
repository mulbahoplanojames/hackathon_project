import Image from "next/image";
import { CoursesType, CoursesPeriodType } from "@/types/types";

export const CoursesCards = (props: CoursesType) => {
  return (
    <div className="bg-[#fff] p-2 rounded-2xl shadow-lg grid grid-rows-[1.5fr] max-w-[600px] dark:bg-sidebar">
      <div className="pb-2">
        <Image
          src={props.imageUrl}
          alt={props.title}
          width={0}
          height={0}
          style={{ width: "100%", maxWidth: "600px", height: "auto" }}
        />
      </div>
      <div className="p-2">
        <h3 className="text-blue-500 text-lg pb-2">{props.title}</h3>
        <h1 className="text-xl font-[600] pb-2">{props.description}</h1>
        <aside className="flex justify-between py-2 gap-4">
          <p className="text-l text-[#8a8a8a]">{props.date}</p>
          <p className="text-base flex items-center justify-center text-[#8a8a8a] bg-[#ddd] dark:bg-[#333] rounded-3xl px-2">
            {props.views}
          </p>
        </aside>
      </div>
    </div>
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

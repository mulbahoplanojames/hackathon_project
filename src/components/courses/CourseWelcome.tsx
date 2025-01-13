"use client";
import { getCookie } from "cookies-next";

const CourseWelcome = () => {
  const user = getCookie("user");
  const currentUser = user ? JSON.parse(user as string) : null;

  return (
    <>
      <section>
        <div className="pb-12">
          <h1 className="mobile:text-[2rem] text-5xl sm:text-6xl">
            Hi,{" "}
            <span className="text-[#118264]">{currentUser?.firstName}!</span>
          </h1>
          <h1 className="mobile:text-[2rem] text-5xl sm:text-6xl">
            What do you want
          </h1>
          <h1 className="mobile:text-[2rem] text-5xl sm:text-6xl">
            to <span className="text-[#118264]">learn</span> today
          </h1>
        </div>
      </section>
    </>
  );
};

export default CourseWelcome;

"use client";
import { getCookie } from "cookies-next";

const TeacherWelcome = () => {
  const user = getCookie("user");
  const currentUser = user ? JSON.parse(user as string) : null;

  return (
    <>
      <div className="pb-6">
        <h1 className="mobile:text-[2rem] text-5xl sm:text-6xl">
          <span className="text-[#118264]">Hi, {currentUser?.firstName}!</span>
          <br />
          <span>Empower the </span>
          <span className="text-[#118264]">leaders</span>
          <span> of tomorrow</span>
          <br />
          <span>by sharing your </span>
          <span className="text-[#118264]">expertise</span>
        </h1>
      </div>
    </>
  );
};

export default TeacherWelcome;

"use client";
import { getCookie } from "cookies-next";

const DoctorWelcome = () => {
  const user = getCookie("user");
  const currentUser = user ? JSON.parse(user as string) : null;

  return (
    <>
      <div className="pb-6">
        <h1 className="mobile:text-[2rem] text-5xl sm:text-6xl">
          <span className="text-[#118264]">
            Hi, Dr. {currentUser?.firstName}!
          </span>
          <br />
          <span>Welcome back </span>
          <span> to give </span>
          <br />
          <span className="text-[#118264]">Students</span>&nbsp;
          <span>good</span>&nbsp;
          <span className="text-[#118264]">Health</span>
        </h1>
      </div>
    </>
  );
};

export default DoctorWelcome;

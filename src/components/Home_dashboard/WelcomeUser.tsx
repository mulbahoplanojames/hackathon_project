"use client";
import { getCookie } from "cookies-next";

const WelcomeUser = () => {
  const user = getCookie("user");
  const currentUser = user ? JSON.parse(user as string) : null;

  console.log("Current user", currentUser);

  return (
    <>
      <h1 className="lg:text-4xl text-3xl pb-3">
        Welcome Back {currentUser?.firstName} {currentUser?.lastName}
      </h1>
      <p className="text-lg md:w-[42%] w-full md:pb-4 pb-6">
        Your progress this week is Awesome. let&apos;s keep it up and get a lot
        of points reward !
      </p>
    </>
  );
};

export default WelcomeUser;

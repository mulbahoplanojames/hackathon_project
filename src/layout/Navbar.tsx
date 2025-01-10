"use client";
import Link from "next/link";
import { ModeToggle } from "@/context/ ModeToggle";
import { PackageCheck } from "lucide-react";
// import UserProfile from "@/components/UserProfile";
import MenuLinks from "./MenuLinks";
import UserProfile from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { getCookie } from "cookies-next";

const Navbar = () => {
  const token = getCookie("token");
  // console.log("Token", token);

  return (
    <>
      <nav className=" flex justify-between items-center py-4 md:px-10 px-4 fixed z-50 w-full top-0 backdrop-blur-[18px] backdrop-saturate-[162%] bg-transparent border-b-2 border-primary_Clr dark:border-white">
        <Link
          href="/"
          className="text-xl font-bold flex justify-center items-center gap-2  md:w-10 md:h-10 w-10 h-10 rounded-md relative bg-primary_Clr text-white"
        >
          <PackageCheck />
        </Link>
        {/*//! Menu items for larger devices and mapping through the links */}
        <MenuLinks />

        <div className="gap-x-4 flex items-center justify-center">
          {token ? (
            <>
              <UserProfile />
            </>
          ) : (
            <>
              <Link href="/login">
                <Button className="dark:bg-transparent bg-white dark:text-white text-primary_Clr hover:bg-white border dark:border-white border-transparent  hover:opacity-80 md:block hidden">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="md:block hidden bg-white text-primary_Clr hover:opacity-85 hover:bg-white">
                  Create Account
                </Button>
              </Link>
            </>
          )}
          <ModeToggle />
          {/* <TbMenu2
            className={`max-lg:block hidden text-3xl cursor-pointer `}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          /> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

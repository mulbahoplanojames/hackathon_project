"use client";
import Link from "next/link";
import { ModeToggle } from "@/context/ ModeToggle";
import { PackageCheck } from "lucide-react";
// import UserProfile from "@/components/UserProfile";
import MenuLinks from "./MenuLinks";
import UserProfile from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { MobileNavbar } from "./MobileNavbar";

const Navbar = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      setToken(token);
    }
  }, [token]);

  return (
    <>
      <nav className=" flex justify-between items-center py-2 md:px-10 px-4 fixed z-50 w-full top-0 backdrop-blur-[30px] backdrop-saturate-[200%] bg-transparent border-b-2 border-primary_Clr dark:border-white">
        <Link
          href="/"
          className="text-xl font-bold flex justify-center items-center gap-2  md:w-10 md:h-10 w-10 h-10 rounded-md relative bg-primary_Clr text-white"
        >
          <PackageCheck />
        </Link>
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
          <MobileNavbar />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

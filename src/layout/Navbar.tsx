"use client";

import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { MdOutlineCancelPresentation } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constant/navData";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/context/ ModeToggle";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // State variable to keep track of whether the menu is open or not.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname();

  return (
    <>
      <nav className=" flex justify-between items-center py-4 md:px-10 px-4 fixed z-50 w-full top-0 backdrop-blur-[18px] backdrop-saturate-[162%] bg-transparent border-b-2 border-primary_Clr dark:border-white">
        <Link
          href="/"
          className="text-2xl font-bold flex justify-center items-center gap-2  md:w-10 md:h-10 w-10 h-10 rounded-md relative bg-green-300"
        >
          <Image src="" alt="logo" className="" fill />
        </Link>
        {/*//! Menu items for larger devices and mapping through the links */}
        <menu className="flex items-center justify-center gap-x-6">
          <ul className="max-lg:hidden">
            {navLinks.map((navlink) => {
              const isActive = pathName === navlink.path;
              return (
                <li key={navlink.label} className="inline-block px-8">
                  <Link
                    href={navlink.path}
                    className={`font-montserrat text-lg leading-normal  ${
                      isActive
                        ? "text-primary_Clr border-b-2 border-primary_Clr"
                        : ""
                    }`}
                  >
                    {navlink.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </menu>

        <div className="lg:gap-x-6 gap-x-4 flex items-center justify-center">
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
          <ModeToggle />
          <TbMenu2
            className={`max-lg:block hidden text-3xl cursor-pointer `}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>
      </nav>

      {/*//! Responsive menu for smaller devices */}
      {isMenuOpen && (
        <div>
          <nav className="lg:bottom-auto bg-primary_Clr fixed top-16 bottom-0 left-0 right-0 z-[9999999] ">
            {/* Close button for the menu */}
            <div
              className="max-lg:block fixed right-0 hidden px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <MdOutlineCancelPresentation className=" text-3xl text-white" />
            </div>
            <ul className=" lg:hidden  gap-y-7 z-40 flex flex-col items-center justify-center h-full">
              {/* Menu items for smaller devices */}
              {navLinks.map((navlink) => (
                <li
                  key={navlink.label}
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                    window.scrollTo(0, 8000);
                  }}
                >
                  <Link
                    href={navlink.path}
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                    className="font-montserrat active:text-black text-2xl leading-normal text-white"
                  >
                    {navlink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;

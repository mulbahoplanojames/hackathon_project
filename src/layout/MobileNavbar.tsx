"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserProfile from "@/components/UserProfile";
import { navLinks } from "@/constant/navData";
import { getCookie } from "cookies-next";
import { PackageCheck } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TbMenu2 } from "react-icons/tb";

export function MobileNavbar() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      setToken(token);
    }
  }, [token]);
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden block">
        <TbMenu2
          size={38}
          className="dark:text-white text-primary_Clr cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent>
        <SheetClose asChild>
          <SheetHeader className="text-left mt-10 flex gap-2  items-center text-primary_Clr flex-row cursor-pointer mb-14">
            <PackageCheck size={38} />
            <SheetTitle className="text-2xl font-bold text-primary_Clr">
              Performance Hub
            </SheetTitle>
          </SheetHeader>
        </SheetClose>

        <menu className="flex flex-col gap-y-8">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.label}>
              <Link
                href={link.path}
                className="text-primary_Clr text-2xl font-semibold"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </menu>

        <div className="gap-x-4 flex items-center justify-start mt-8">
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
        </div>
      </SheetContent>
    </Sheet>
  );
}

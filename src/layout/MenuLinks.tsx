"use client";

import { navLinks } from "@/constant/navData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLinks = () => {
  const pathName = usePathname();
  return (
    <>
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
    </>
  );
};

export default MenuLinks;

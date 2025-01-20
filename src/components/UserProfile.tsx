"use client";
import Image from "next/image";
import { deleteCookie, getCookie } from "cookies-next";
import Link from "next/link";

const UserProfile = () => {
  const userCookie = getCookie("user");
  const user = userCookie ? JSON.parse(userCookie) : null;
  const userRole = user?.roles[0]?.title;

  return (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full border border-black">
            <Image
              alt="Tailwind CSS Navbar component"
              src="/Cybersecurity.png"
              fill
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          {userRole === undefined ? (
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          ) : (
            <li>
              <Link href="/teacher-dashboard">Dashboard</Link>
            </li>
          )}
          <li>
            <span
              onClick={() => {
                deleteCookie("token");
                deleteCookie("user");
                window.location.reload();
              }}
            >
              Logout
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserProfile;

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email", email);
    console.log("Password", password);
  };
  return (
    <>
      <section className="flex flex-col sm:flex-row h-auto sm:h-[35rem] w-full sm:w-[60rem] bg-white rounded-[20px] shadow">

        <div className="w-full sm:w-1/2 p-4 sm:p-8 flex flex-col justify-center">
          <Link href="/" className="mb-4">
            <Image src="/Left chevron.svg" alt="" width={30} height={20} />
          </Link>
          <form onSubmit={handleLogin} className="pl-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-text_light">
              Login
            </h1>
            <h4 className="text-text_light mt-3 w-full sm:w-64">
              Welcome back, please login to your account
            </h4>
            <div className="mt-4">
              <label
                className="block text-sm font-medium text-text_light"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="your@email.com"
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary_Clr focus:border-primary_Clr sm:text-sm"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-text_light mt-4"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary_Clr focus:border-primary_Clr sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-sm text-text_light hover:text-green-800 flex justify-end"
              >
                Forgot Password
              </a>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-primary_Clr text-white px-4 py-2 rounded-md"
            >
              Login
            </button>
            <h3 className="mt-4 text-sm text-text_light">
              New user?{" "}
              <a href="#" className="text-green-900">
                Sign Up
              </a>
            </h3>
          </form>
        </div>
        <div
          style={{
            background: "linear-gradient(140deg, #064e34 30%, #0eb488 100%)",
          }}
          className="hidden sm:flex w-full sm:w-1/2 items-start justify-start pt-8 sm:pt-28 pl-4 sm:pl-8 rounded-b-[20px] sm:rounded-r-[20px] sm:rounded-bl-none"
        >
          <h1 className="text-white w-56 text-4xl sm:text-6xl">Welcome Back</h1>
        </div>
      </section>
    </>
  );
};

export default LogIn;

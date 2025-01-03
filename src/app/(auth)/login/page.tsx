"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { loginSchema } from "@/schema/zod-schema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validateLogin = (loginData: { email: string; password: string }) => {
  const validationResult = loginSchema.safeParse(loginData);
  if (!validationResult.success) {
    console.error(validationResult.error.errors);
    toast.error(
      "Validation error: " +
        validationResult.error.errors.map((e) => e.message).join(", ")
    );
    return false;
  }
  console.log("Login data is valid...");
  return true;
};

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const loginData = { email, password };

    if (!email || !password) {
      toast.error("Email and password are required.");
      return;
    }

    if (validateLogin(loginData)) {
      console.log("Email", email);
      console.log("Password", password);
    }
  };

  return (
    <>
      <section className="flex flex-col sm:flex-row h-auto sm:h-[35rem] w-full sm:w-[60rem] bg-white dark:bg-slate-800 rounded-[20px] shadow sm:shadow-lg">
        <div className="w-full sm:w-1/2 p-4 sm:p-8 flex flex-col justify-center">
          <Link href="/" className="mb-4 w-8">
            <Image src="/Left chevron.svg" alt="" width={30} height={20} />
          </Link>
          <form onSubmit={handleLogin} className="pl-6">
            <h1 className="text-4xl sm:text-5xl font-bold">Login</h1>
            <h4 className="mt-3 w-full sm:w-64">
              Welcome back, please login to your account
            </h4>
            <div className="mt-4">
              <label className="block text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="your@email.com"
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-black rounded-md shadow-sm focus:outline-none focus:ring-primary_Clr focus:border-primary_Clr sm:text-sm"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mt-4"
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-black rounded-md shadow-sm focus:outline-none focus:ring-primary_Clr focus:border-primary_Clr sm:text-sm"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <a href="#" className="text-sm w-[7rem]">
                Forgot Password
              </a>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-primary_Clr text-white px-4 py-2 rounded-md"
            >
              Login
            </button>
            <h3 className="mt-4 text-sm">
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
      <ToastContainer />
    </>
  );
};

export default LogIn;

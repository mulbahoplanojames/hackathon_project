
"use client";
import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/zod-schema";
import "react-toastify/dist/ReactToastify.css";
import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
} from "@/components/ui/form";
import { resolve } from "path";

const LogIn = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    console.log(data);
  }
  return (
    <>
      <section className="flex flex-col sm:flex-row h-auto sm:h-[38rem] w-full sm:w-[70rem] bg-white dark:bg-sidebar rounded-[20px] shadow sm:shadow-lg">
        <div className="w-full sm:w-[60%] p-8 md:p-12 flex flex-col justify-center">
          <Link href="/" className="mb-4  w-8">
            <Image src="/Left_chevron.svg" alt="" width={30} height={20} />
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold">Login</h1>
          <h4 className="mt-3 text-[20px]">
            Welcome back, please <br/>login to your account
          </h4>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="email"
                      className="text-[25px] font-semibold"
                    >
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        className="h-12 rounded-2xl"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="password"
                      className="block text-[25px] font-semibold pt-4"
                    >
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        className="h-12 rounded-2xl"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="mt-4 flex justify-end">
                <Link href="#" className="text-[20px]">
                    Forgot Password
                </Link>
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-primary_Clr text-[20px] text-white py-2 rounded-2xl"
              >
                Login
              </button>
              <h3 className="mt-4 text-[20px]">
                New user?{" "}
                <a href="#" className="text-green-900 dark:text-green-700">
                  Sign Up
                </a>
              </h3>
            </form>
          </Form>
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

export default Login;

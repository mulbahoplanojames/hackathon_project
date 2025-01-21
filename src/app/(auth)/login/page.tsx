"use client";
import { z } from "zod";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/zod-schema";
import "react-toastify/dist/ReactToastify.css";
import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { ChevronsLeft } from "lucide-react";
import { getCookie } from "cookies-next";

interface UserRole {
  title: string;
}

interface User {
  roles?: UserRole[];
}

const Login = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onHandleLoginSubmit = async (data: z.infer<typeof loginSchema>) => {
    const userCookie = getCookie("user");
    let user: User | null = null;

    try {
      user = userCookie ? JSON.parse(userCookie as string) : null;
    } catch (error) {
      console.error("Failed to parse user cookie:", error);
    }

    const userRole =
      user?.roles && user.roles.length > 0 ? user.roles[0].title : null;
    console.log("User Role : ", userRole);

    console.log("data user", userRole);
    try {
      const response = await axios.post("/api/auth/login", {
        email: data.email,
        password: data.password,
      });
      console.log("Response from the login form success block", response);

      if (response.status === 200 || response.status === 201) {
        form.reset();
        toast.success("Login successfully");
        router.push(
          userRole === undefined || userRole === null
            ? "/dashboard"
            : userRole === "teacher"
              ? "/teacher-dashboard"
              : "/dashboard"
        );
      }

      return response;
    } catch (error) {
      console.error("Login failed from the login catch block:", error);
      toast.error("Login failed or Account not found");
    }
  };

  return (
    <>
      <section className="flex flex-col sm:flex-row h-auto sm:h-[38rem] w-full sm:w-[70rem] bg-white dark:bg-sidebar rounded-[20px] shadow sm:shadow-lg">
        <div className="w-full sm:w-[60%] p-8 md:p-12 flex flex-col justify-center">
          <Link href="/" className="mb-4  w-8">
            <ChevronsLeft className="size-8" />
          </Link>
          <h2 className="text-3xl sm:text-5xl font-bold">Login</h2>
          <h4 className="mt-3 text-[20px]">
            Welcome back, please login to your account
          </h4>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onHandleLoginSubmit)}
              className="mt-4 space-y-6"
            >
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        className="h-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        className="h-10 "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className=" flex justify-end">
                <Link href="#">Forgot Password</Link>
              </div>
              <button
                type="submit"
                className="mt-2 w-full bg-primary_Clr text-white py-2 rounded-xl"
              >
                Login
              </button>
              <h3>
                New user? &nbsp;
                <Link
                  href="/signup"
                  className="text-green-900 dark:text-green-700"
                >
                  Sign Up
                </Link>
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
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      </section>
    </>
  );
};

export default Login;

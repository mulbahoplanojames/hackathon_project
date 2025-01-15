"use client";

import { z } from "zod";
import Link from "next/link";
// import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { signupSchema } from "@/schema/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

const SignUp = () => {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      rollNumber: "",
      phoneNumber: "",
      password: "",
    },
  });

  const router = useRouter();

  // sending the data to my local route endpoint server before sending to the backend server
  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    const { firstName, lastName, email, rollNumber, phoneNumber, password } =
      data;
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        rollNumber,
        phone: phoneNumber,
        password,
      });
      // console.log("Response from the sign form", response);

      if (response.status === 200 || response.status === 201) {
        form.reset();
        toast.success("Account created successfully");
        router.push("/dashboard");
        revalidatePath("/");
      }

      return response;
    } catch (error) {
      console.log(
        "Registration failed from the signup form catch request :",
        error
      );
    }
  };

  return (
    <>
      <section className="grid grid-row-2 lg:grid-cols-2 lg:w-[1020px] xl:w-[1200px] w-[700px]  rounded-2xl overflow-hidden shadow-xl dark:bg-[#000]">
        <aside className="justify-center px-10 py-10 max-sm:px-5 col-span-1">
          <Link href="/">
              {/* <Image src="/Left chevron.svg" alt="" width={30} height={30} /> */}
          </Link>
          <h1 className="text-4xl pt-3 pb-4 font-[900]">SignUp</h1>
          <p className="pb-6">Create your account with Performance Hub</p>
          <Form {...form}>
            <form
              className="flex flex-col space-y-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  name="firstName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="First Name"
                          {...field}
                          className="h-10"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="lastName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="First Name"
                          {...field}
                          className="h-10"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="First Name"
                          {...field}
                          className="h-10"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  name="rollNumber"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Roll Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Roll Number"
                          {...field}
                          className="h-10"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="phoneNumber"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Number"
                          {...field}
                          className="h-10"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                          className="h-10"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <aside className="flex gap-2 pb-3 pt-1 text-lg justify-end">
                <p>Have an account?</p>
                <Link href="/login" className="text-[#064E3B]">
                  Login
                </Link>
              </aside>
              <Button
                type="submit"
                className="bg-[#064E3B] text-xl rounded-xl h-12 dark:text-white dark:hover:text-black"
              >
                SignUp
              </Button>
            </form>
          </Form>
        </aside>
        <div className="row-start-1 lg:col-start-2 py-16 px-4 lg:py-20 lg:px-12 bg-gradient-to-br from-slate-800 via-primary_Clr to-primary_Clr col-span-1">
          <h1 className="text-5xl text-white lg:text-6xl max-lg:text-center">
            Create Your Account
          </h1>
        </div>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      </section>
    </>
  );
};

export default SignUp;

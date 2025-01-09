
"use client";

import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
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

  const onSubmit = (data: z.infer<typeof signupSchema>) => {
    console.log(data);
  }

  return (
    <>
      <section className="grid grid-row-2 lg:grid-cols-2 lg:w-[1020px] xl:w-[1200px] w-[700px]  rounded-2xl overflow-hidden shadow-xl dark:bg-[#000]">
        <aside className="justify-center px-10 py-10 max-sm:px-5 col-span-1">
          <Link href="/">
            <button className="border-none bg-none">
              <Image src="/Left chevron.svg" alt="" width={30} height={30} />
            </button>
          </Link>
          <h1 className="text-5xl pt-3 pb-4 font-[900]">SignUp</h1>
          <p className="pb-6">Create your account with Performance Hub</p>
          <Form {...form}>
            <form className="flex flex-col space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  name="firstName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl font-[600]">First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} className="h-12 rounded-2xl"/>
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
                      <FormLabel className="text-xl font-[600]">Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} className="h-12 rounded-2xl"/>
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
                      <FormLabel className="text-xl font-[600]">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} className="h-12 rounded-2xl"/>
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
                      <FormLabel className="text-xl font-[600]">Roll Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Roll Number" {...field} className="h-12 rounded-2xl"/>
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
                      <FormLabel className="text-xl font-[600]">Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Number" {...field} className="h-12 rounded-2xl"/>
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
                        <FormLabel className="text-xl font-[600]">Password</FormLabel>
                        <FormControl>
                          <Input type='password' placeholder="Password" {...field} className="h-12 rounded-2xl"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div>
              <aside className="flex gap-2 pb-3 pt-1 text-xl justify-end">
                <p>Have an account?</p>
                <Link href="/login">
                  <button className="border-none bg-none text-[#064E3B]">
                    Login
                  </button>
                </Link>
              </aside>
              <Button type="submit" className="bg-[#064E3B] text-xl rounded-2xl h-12 dark:text-white dark:hover:text-black">
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
      </section>
    </>
  );
};

export default SignUp;

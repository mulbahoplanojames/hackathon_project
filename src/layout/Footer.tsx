"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { footerData } from "@/data/footerData";
import { newsLetterSchema } from "@/schema/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { PackageCheck } from "lucide-react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

type NewsLetterType = z.infer<typeof newsLetterSchema>;

const Footer = () => {
  const form = useForm({
    resolver: zodResolver(newsLetterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<NewsLetterType> = (data) => {
    console.log(data);
  };

  return (
    <>
      <footer className="px-4 divide-y  text-white bg-primary_Clr border-t-primary_Clr border-2">
        <div className="container flex flex-col justify-between py-10 md:gap-16 gap-4 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3  ">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-1 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                <PackageCheck />
              </div>
              <span className="self-center text-2xl font-semibold">
                Student P. Hub
              </span>
            </Link>
            <div className="space-y-2 mt-3">
              <h3 className="uppercase text-white">
                Subscribe to our newsletter
              </h3>
              <p className="">
                Stay updated on our latest features and offerings.
              </p>
              <div className="w-full space-x-3">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full flex items-center gap-2 "
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex-1 ">
                          <FormControl>
                            <Input placeholder="shadcn" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="">
                      Submit
                    </Button>
                  </form>
                </Form>
              </div>
              <p className="">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            {footerData.map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="uppercase text-white">{item.title}</h3>
                <ul className="space-y-1">
                  {item.links.map((link, index) => (
                    <Link href={link.href} key={index} className="block py-2 ">
                      {link.name}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-600">
          © {new Date().getFullYear()} Student Performance Hub. All rights
          reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;

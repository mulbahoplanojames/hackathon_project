"use client";

import { z } from "zod";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { NewsLetterSchema } from "@/schema/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormItem,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";

const NewsLetter = () => {
  const form = useForm<z.infer<typeof NewsLetterSchema>>({
    resolver: zodResolver(NewsLetterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof NewsLetterSchema>) => {
    console.log(data);
  };
  return (
    <div className="my-10 mx-5 md:mx-10 lg:pt-10 h-[350px] relative">
      <section className="my-4 sm:my-0 bg-[#064E3B] rounded-3xl py-16">
        <aside className="px-5 md:px-20">
          <h1 className="text-[2rem] sm:text-[2.6rem] font-semibold text-white">
            Our NewsLetter
          </h1>
          <h2 className="text-xl pb-4 text-white">
            Subscribe to our NewsLetter
          </h2>
          <Form {...form}>
            <form
              className="sm:flex gap-2 sm:items-center"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter your Email"
                        className="bg-sidebar outline-none h-14 w-full md:w-[400px] lg:w-[320px] mb-2 rounded-2xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="text-xl h-14 rounded-2xl">
                Subscribe
              </Button>
            </form>
          </Form>
        </aside>
        <Image
          src="/check.svg"
          alt=""
          width={0}
          height={0}
          className="w-[358px] absolute top-0 right-[4.5%] max-lg:hidden "
        />
      </section>
    </div>
  );
};

export default NewsLetter;

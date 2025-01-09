"use client";
import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema } from "@/schema/zod-schema";
import "react-toastify/dist/ReactToastify.css";
import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
} from "@/components/ui/form";
import { resolve } from "path";
const BookingForm = () => {
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      Your_Name: "",
      Prefered_Date: 0,
      Preferred_Time: 0,
      Doctor_Name: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof bookingSchema>) => {
    console.log(data);
  };

  return (
    <div className="py-[6rem] px-[2rem] rounded-lg shadow-lg bg-white dark:bg-sidebar w-full max-w-[80rem]">
      <h1 className="text-start text-2xl font-bold mb-12">
        Book an Appointment
      </h1>
      <Form {...form}>
        <form
          className="flex flex-col space-y-4 border-2 border-black py-12 px-8 rounded-lg"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="grid md:grid-cols-2 md:gap-16 gap-4 mb-8">
            <FormField
              name="Your_Name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor=""
                    className="font-semibold mt-4 col-span-1 text-[1.2rem]"
                  >
                    Your Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Name"
                      className="h-12 rounded-2xl dark:bg-black"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="Your_Name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor=""
                    className="font-semibold mt-4 text-[1.2rem]"
                  >
                    Preferred Date
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter a preferred date"
                      className="h-12 rounded-2xl dark:bg-black"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 md:gap-16 gap-4">
            <FormField
              name="Your_Name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor=""
                    className="font-semibold col-span-1 mt-4 text-[1.2rem]"
                  >
                    Preferred Time
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Give a preferred time"
                      className="h-12 rounded-2xl dark:bg-black"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="Your_Name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="block">
                  <FormLabel
                    htmlFor=""
                    className="font-semibold block text-[1.2rem]"
                  >
                    {" "}
                    Doctors Name
                  </FormLabel>
                  <FormControl>
                    <select
                      id="mySelect"
                      className="w-full border px-2 h-12 rounded-2xl dark:bg-black"
                    >
                      <option value="" className="text-gray-300">
                        Select a doctor
                      </option>
                      <option value="Dr. John Doe">Dr. John Doe</option>
                      <option value="Dr. Jane Doe">Dr. Jane Doe</option>
                      <option value="Dr. Alex Smith">Dr. Alex Smith</option>
                      <option value="Dr. Emily Clark">Dr. Emily Clark</option>
                      <option value="Dr. Michael Brown">
                        Dr. Michael Brown
                      </option>
                      <option value="Dr. Sarah Johnson">
                        Dr. Sarah Johnson
                      </option>
                    </select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <button
            type="submit"
            className="py-[.7rem] bg-primary_Clr text-white rounded-[18px] w-full md:w-[28rem]"
          >
            Book an Appointment now
          </button>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;

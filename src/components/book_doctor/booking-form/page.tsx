"use client";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema } from "@/schema/zod-schema";
import "react-toastify/dist/ReactToastify.css";
import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import toast from "react-hot-toast";
import { getCookie } from "cookies-next";

const BookingForm = ({
  name,
  doctor_id,
}: {
  name: string;
  doctor_id: string;
}) => {
  console.log("Props Data", doctor_id);
  console.log("Props Data", name);

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      yourName: "",
      preferredDate: new Date(),
      description: "",
    },
  });

  const user = getCookie("user");
  const currentUser = user ? JSON.parse(user as string) : null;

  const onSubmit = async (formValues: z.infer<typeof bookingSchema>) => {
    console.log("form formValues", formValues);
    const { yourName, preferredDate, description } = formValues;
    const preferredDateString = format(preferredDate, "yyyy-MM-dd");

    try {
      const response = await axios.post(
        "http://localhost:8000/api/apointment/create",
        {
          patient_name: yourName,
          doctor_id: doctor_id,
          user_id: currentUser?.id,
          prefared_date: preferredDateString,
          description: description,
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Appointment booked successfully");
      } else {
        toast.error("Failed to book an appointment");
      }

      const data = response.data;
      return data;
    } catch (error) {
      console.log("Data not sent", error);
      toast.error("Failed to book an appointment");
    }
  };

  return (
    <div className=" py-6 px-5 rounded-lg shadow-lg bg-white dark:bg-sidebar w-full max-w-[80rem]">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-primary_Clr text-white opacity-80 hover:bg-primary_Clr">
            Book An Appointment
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[650px]">
          <DialogTitle>Book An Appointment with {name}</DialogTitle>

          <Form {...form}>
            <form
              className="flex flex-col space-y-4 border-2 border-black py-6 px-8 rounded-lg"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="grid md:grid-cols-2 md:gap-16 gap-4 mb-4 place-items-center">
                <FormField
                  name="yourName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel htmlFor="">Your Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Name"
                          className="h-10 "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                      <FormLabel>Preferred Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full h-10 pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="">Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your preferred description"
                        className="h-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                type="submit"
                className="py-[.7rem] bg-primary_Clr text-white rounded-md w-full md:w-[28rem] mx-auto"
              >
                Book an Appointment now
              </button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingForm;

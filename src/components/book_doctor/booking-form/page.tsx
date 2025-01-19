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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

const BookingForm = () => {
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      yourName: "",
      preferredDate: new Date(),
      preferredTime: "",
      doctorName: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof bookingSchema>) => {
    console.log(data);
  };

  return (
    <div className=" py-6 px-5 rounded-lg shadow-lg bg-white dark:bg-sidebar w-full max-w-[80rem]">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-primary_Clr text-white opacity-80 hover:bg-primary_Clr">
            Submit Assignment
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle>Submit Your Assignment</DialogTitle>

          <Form {...form}>
            <form
              className="flex flex-col space-y-4 border-2 border-black py-12 px-8 rounded-lg"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="grid md:grid-cols-2 md:gap-16 gap-4 mb-8 place-items-center">
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

              <div className="grid md:grid-cols-2 md:gap-16 gap-4">
                <FormField
                  name="preferredTime"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="">Preferred Time</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Give a preferred time"
                          className="h-10"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="doctorName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Doctors Name</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-10">
                            <SelectValue placeholder="Select a verified email to display" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Dr. John Doe">
                            Dr. John Doe
                          </SelectItem>
                          <SelectItem value="Dr. Michael Brown">
                            Dr. Michael Brown
                          </SelectItem>
                          <SelectItem value="Dr. Alex Smith">
                            Dr. Alex Smith
                          </SelectItem>
                          <SelectItem value="Dr. Sarah Johnson">
                            Dr. Sarah Johnson
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <button
                type="submit"
                className="py-[.7rem] bg-primary_Clr text-white rounded-md w-full md:w-[28rem]"
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

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import { UserType } from "@/types/type2";
import { TableCell, TableRow } from "@/components/ui/table";
import { formSchema } from "@/schema/zod-schema";
import axios from "axios";

const AddMarksForm = ({
  student,
  course_id,
  course_name,
}: {
  course_id: string;
  course_name: string;
  student: UserType;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/marks/create`,
        {
          user_id: student?.id,
          course_id,
          course_name,
          catOne: values.catOne,
          catTwo: values.catTwo,
          fat: values.fat,
        }
      );

      const data = await response.data;
      console.log(data);

      if (response.status === 200 || response.status === 201) {
        toast.success("Marks Added successfully");
        window.location.reload();
      }

      if (response.status === 409 || response.status === 500) {
        toast.error("Marks already exists");
      }

      return data;
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Marks already exists");
    }
  }
  return (
    <>
      <Dialog key={student.id}>
        <DialogTrigger asChild>
          <TableRow>
            <TableCell className="sticky left-0 bg-gray-50 dark:bg-gray-900 py-3 px-4 whitespace-nowrap">
              {student?.id}
            </TableCell>
            <TableCell className="py-3 px-4 whitespace-nowrap">
              {student?.firstName} {student?.lastName}
            </TableCell>
            <TableCell className="py-3 px-4 whitespace-nowrap">
              {student?.email}
            </TableCell>
            <TableCell className="py-3 px-4 whitespace-nowrap">
              {student?.rollNumber}
            </TableCell>
            <TableCell className="py-3 px-4 whitespace-nowrap">
              {student?.phone}
            </TableCell>
          </TableRow>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add Marks</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="catOne"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CAT ONE</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Cat One maks for this student"
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
                name="catTwo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CAT - TWO</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the CAT TWO Marks of this Student"
                        type=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FAT</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" type="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddMarksForm;

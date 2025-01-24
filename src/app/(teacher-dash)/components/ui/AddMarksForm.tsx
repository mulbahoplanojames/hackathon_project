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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import { UserType } from "@/types/type2";
import { TableCell, TableRow } from "@/components/ui/table";
import { formSchema } from "@/schema/zod-schema";

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast.success("Marks Added successfully");
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit Marks. Please try again.");
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
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 max-w-3xl mx-auto py-10"
            >
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
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
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
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
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
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
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

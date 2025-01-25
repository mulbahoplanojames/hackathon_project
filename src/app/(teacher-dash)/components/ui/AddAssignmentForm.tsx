"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  // DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { teacherAssignmentSchema } from "@/schema/zod-schema";
import axios from "axios";
import toast from "react-hot-toast";

type AddAssignmentsType = {
  id: string;
};

type AssignmentFormValues = z.infer<typeof teacherAssignmentSchema>;

const AddAssignmentForm = ({ id }: AddAssignmentsType) => {
  const form = useForm<AssignmentFormValues>({
    resolver: zodResolver(teacherAssignmentSchema),
    defaultValues: {
      title: "",
      assigment_file: undefined,
    },
  });

  const onSubmit = async (data: AssignmentFormValues) => {
    const { title, assigment_file } = data;
    console.log("Data", data);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/assigments/create",
        {
          title,
          assigment_file,
          course_id: id,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-Requested-With": "XMLHttpRequest",
          },
        }
      );
      const data = await res.data;
      console.log("Form Data:", data);

      if (res.status === 200 || res.status === 201) {
        toast.success("Assignment added successfully");
        window.location.reload();
      } else {
        toast.error("Failed to add assignment. Please try again.");
      }
      return data;
    } catch (error) {
      console.log("Error adding assignment:", error);
    }
  };

  return (
    <section className="p-4 pt-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full">Add Assignment</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle>Add Assignment to Student</DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assignment Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter module name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="assigment_file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>File</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            field.onChange(file);
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Add Assignment
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AddAssignmentForm;

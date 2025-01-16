"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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

type AssignmentFormValues = z.infer<typeof teacherAssignmentSchema>;
interface AddAssignmentsProps {
  id: string;
}
const AddAssignmentForm = (props: AddAssignmentsProps) => {
  const form = useForm<AssignmentFormValues>({
    resolver: zodResolver(teacherAssignmentSchema),
    defaultValues: {
      title: "",
      marksObtain: "",
      totalMarks: "",
    },
  });

  const onSubmit = async (data: AssignmentFormValues) => {
    const { title, marksObtain, totalMarks } = data;

    try {
      const res = await axios.post(
        "http://localhost:8000/api/assigments/create",
        {
          title,
          marksObtain,
          totalMarks,
          course_id: props.id,
        }
      );
      const data = await res.data;
      console.log("Form Data:", data);

      if (res.status === 200 || res.status === 201) {
        toast.success("Assignment added successfully");
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

              {/* <FormField
                  control={form.control}
                  name="assignmentDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Assignment Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
              {/* <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>File</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <FormField
                  control={form.control}
                  name="marksObtain"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mark Obtained</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="totalMarks"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Marks</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit Button */}
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

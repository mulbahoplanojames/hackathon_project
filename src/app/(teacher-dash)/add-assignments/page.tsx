"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { teacherAssignmentSchema } from "@/schema/zod-schema";

type AssignmentFormValues = z.infer<typeof teacherAssignmentSchema>;

const AssignmentForm = () => {
  const form = useForm<AssignmentFormValues>({
    resolver: zodResolver(teacherAssignmentSchema),
    defaultValues: {
      module: "",
      assignmentDate: "",
      dueDate: "",
      classAssignTo: "",
      file: undefined,
    },
  });

  const onSubmit = (data: AssignmentFormValues) => {
    console.log("Form Data:", data);
    alert("Assignment added successfully!");
  };

  return (
    <section className="p-4 pt-3">
      <Card className="w-full mt-8">
        <CardHeader>
          <CardTitle>Add Assignment</CardTitle>
          <CardDescription>
            Fill in the details to add a new assignment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <FormField
                  control={form.control}
                  name="module"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Module</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter module name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
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
                />
              </div>
              <FormField
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
              />
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Due Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="classAssignTo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Class Assigned To</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) => field.onChange(value)}
                          defaultValue=""
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Class A">Class A</SelectItem>
                            <SelectItem value="Class B">Class B</SelectItem>
                            <SelectItem value="Class C">Class C</SelectItem>
                          </SelectContent>
                        </Select>
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
        </CardContent>
      </Card>
    </section>
  );
};

export default AssignmentForm;

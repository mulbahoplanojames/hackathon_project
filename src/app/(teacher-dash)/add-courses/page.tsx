"use client";

import DashboardHeader from "@/components/dashboard-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addCoursesSchema } from "@/schema/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const AddCoursePage = () => {
  const router = useRouter();

  const addCourseForm = useForm<z.infer<typeof addCoursesSchema>>({
    resolver: zodResolver(addCoursesSchema),
    defaultValues: {
      title: "",
      description: "",
      file: undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof addCoursesSchema>) => {
    const { title, description, file } = data;
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/courses/create",
        {
          title,
          description,
          file,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-Requested-With": "XMLHttpRequest",
          },
        }
      );
      const data = await response.data;
      console.log("Form Data:", data);
      if (response.status === 200 || response.status === 201) {
        toast.success("Course added successfully");
        addCourseForm.reset();
        router.push("/lecturer-courses");
      }
      return response;
    } catch (error) {
      console.log("Error Adding courses:", error);
      toast.error("Failed to add course. Please try again.");
    }
  };

  return (
    <>
      <section className="p-4 pt-3">
        <DashboardHeader text="Add Course" />
        <Card>
          <CardHeader>
            <CardTitle>Add Course</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <Form {...addCourseForm}>
              <form
                className="space-y-4"
                onSubmit={addCourseForm.handleSubmit(onSubmit)}
              >
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  <FormField
                    control={addCourseForm.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Name / Title</FormLabel>
                        <FormControl>
                          <Input placeholder="title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={addCourseForm.control}
                    name="file"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Image</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept="image/*"
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
                </div>
                <FormField
                  control={addCourseForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter course description"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Add Course</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default AddCoursePage;

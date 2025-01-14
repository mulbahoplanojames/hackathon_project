"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { getCookie } from "cookies-next";
import axios from "axios";

const formSchema = z.object({
  file: z.any().refine((file) => file instanceof File, {
    message: "Please select a valid file",
  }),
});

export function UpdateUserProfles() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      file: undefined,
    },
  });

  const user = getCookie("user");
  const currentUser = user ? JSON.parse(user as string) : null;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values.file);

    try {
      const response = await axios.post(
        `http://localhost:8000/api/profile/store/${currentUser?.id}`,
        {
          file: values.file,
        }
      );

      console.log("Response from the Update Profile form", response.data);

      if (response.status === 200 || response.status === 201) {
        toast.success("Profile updated successfully");
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span>Update Profile</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Update Profile</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
            <FormField
              name="file"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Assignment File</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      className="file-input"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          field.onChange(e.target.files[0]);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

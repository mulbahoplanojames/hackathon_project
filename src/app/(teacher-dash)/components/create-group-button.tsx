"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { GroupCardType } from "@/types/types";
import { createGroupSchema } from "@/schema/zod-schema";

type CreateGroupButtonProps = {
  onAddGroup: (group: GroupCardType) => void;
};

const CreateGroupButton: React.FC<CreateGroupButtonProps> = ({
  onAddGroup,
}) => {
  const form = useForm<GroupCardType>({
    resolver: zodResolver(createGroupSchema),
  });

  const [image, setImage] = useState<string | null>(null);

  const onImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Convert the file to Base64 string
        setImage(reader.result as string);
      };
      // Read file as Base64 string
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: GroupCardType) => {
    // Include the  image string in the group data
    onAddGroup({ ...data, image: image ?? undefined });
    form.reset();
    setImage(null);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary_Clr text-white">Create Group</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Group</DialogTitle>
          <DialogDescription>
            Create a new group to organize your students.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Group name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Group description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input type="file" accept="image/*" onChange={onImageUpload} />
              </FormControl>
              {image && (
                <p className="mt-2 text-sm text-gray-500">Image uploaded!</p>
              )}
            </FormItem>
            <DialogFooter>
              <Button type="submit">Add Group</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroupButton;

import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const bookingSchema = z.object({
  Your_Name: z.string().min(3, { message: "Please enter this information" }),
  Prefered_Date: z
    .number()
    .min(3, { message: "Please enter this information" }),
  Preferred_Time: z
    .number()
    .min(3, { message: "Please enter this information" }),
  Doctor_Name: z.string().min(3, { message: "Please enter this information" }),
});

export const NewsLetterSchema = z.object({
  email: z.string().email(),
});

export const signupSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First Name must be at least 2 characters long" }),
  lastName: z
    .string()
    .min(3, { message: "Last Name must be at least 2 characters long" }),
  email: z.string().email(),
  rollNumber: z
    .string()
    .min(8, { message: "Roll Number must be at least 8 characters long" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone Number must be at least 10 characters long" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const createGroupSchema = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().nonempty("Description is required"),
  image: z.string().optional(),
});

export const teacherAssignmentSchema = z.object({
  module: z.string().min(1, "Module name is required"),
  assignmentDate: z.string().nonempty("Assignment date is required"),
  dueDate: z.string().nonempty("Due date is required"),
  classAssignTo: z.string().min(1, "Class assigned to is required"),
  file: z.instanceof(File).optional(),
});

export const newsLetterSchema = z.object({
  email: z.string().email(),
});

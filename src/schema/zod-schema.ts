import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
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

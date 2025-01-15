import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const bookingSchema = z.object({
  yourName: z.string().min(3, { message: "Please enter this information" }),
  preferredDate: z.coerce
    .date()
    .min(new Date(), { message: "Please enter a valid date" }),
  preferredTime: z
    .string()
    .min(3, { message: "Please enter this information" }),
  doctorName: z.string().min(3, { message: "Please enter this information" }),
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

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
];

export const fileUploadSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      "Only image, PDF, Word and PowerPoint formats are supported."
    ),
});

export type FileUploadSchemaType = z.infer<typeof fileUploadSchema>;

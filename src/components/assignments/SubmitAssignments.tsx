"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useAssignmentUpload } from "@/lib/assignment/useAssignmentUpload";

// type SubmitAssignmentsProps = string;

interface SubmitAssignmentsProps {
  id: string;
}

export function SubmitAssignments(props: SubmitAssignmentsProps) {
  const { form, onSubmit, isUploading, uploadResult, error } =
    useAssignmentUpload(props.id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-primary_Clr text-white opacity-80 hover:bg-primary_Clr">
          Submit Assignment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Submit Your Assignment</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assignment File</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      disabled={isUploading}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          field.onChange(file);
                        }
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Select an image file to upload (max 5MB, .pdf .doc .docx
                    .ppt)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={isUploading}>
                {isUploading ? "Uploading..." : "Upload"}
              </Button>
            </DialogFooter>
          </form>
        </Form>

        {uploadResult && (
          <Alert className="mt-4">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              {uploadResult.message}
              {uploadResult.fileUrl && (
                <a
                  href={uploadResult.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 text-blue-500 hover:underline"
                >
                  View uploaded file
                </a>
              )}
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}
      </DialogContent>
    </Dialog>
  );
}

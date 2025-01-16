"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { assignmentData } from "@/constant/assignmentData";
import { FolderUp, Printer } from "lucide-react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const ITEMS_PER_PAGE = 6;

interface AssignmnetsTypes {
  id: number;
  title: string;
  file?: "";
  module: string;
  dateline: string;
  created_at: string;
}

const fecthAllAssignments = async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/all-assignments");
    const data = await res.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error fetching All Assignments", error);
  }
};

const AssignmentTable = () => {
  const {
    data: assignmentDataMain = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-assignments"],
    queryFn: () => fecthAllAssignments(),
  });

  console.log("Main Data", assignmentDataMain);

  const [search, setSearch] = useState("");
  const [filteredAssignments, setFilteredAssignment] =
    useState(assignmentDataMain);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (e: { target: { value: string } }) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setCurrentPage(1);

    const filtered = assignmentDataMain?.filter(
      (assignment: AssignmnetsTypes) =>
        assignment.module.toLowerCase().includes(value)
    );
    setFilteredAssignment(filtered);
  };

  // The below code is to Calculate pagination values just in case i forget in the future :)
  const totalPages = Math.ceil(filteredAssignments?.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentAssignment = filteredAssignments?.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Converting table to csv and exporting it
  const handleExport = () => {
    const csvHeader = "ID,Module,Uploaded Date,Submission Date,File\n";
    const csvRows = filteredAssignments?.map((assignment: AssignmnetsTypes) =>
      [
        assignment.id,
        assignment.module,
        assignment.created_at,
        assignment.dateline,
        assignment.file,
      ].join(",")
    );
    const csvData = `${csvHeader}${csvRows.join("\n")}`;
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "assignments_data.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  // Printing the table
  const handlePrint = () => {
    window.print();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-52 w-full">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-52 w-full text-center bg-red-400">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-5xl font-bold text-red-500">Oops!</h1>
          <p className="text-2xl font-medium text-gray-700 dark:text-gray-200">
            Something went wrong.
          </p>
          <Button>Try again</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg mt-6 col-span-4">
        <div className="p-4 sm:p-6">
          <div className="mb-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Assignment List
            </h1>
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Search by module..."
                value={search}
                onChange={handleSearch}
                className="w-full sm:max-w-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              />
              <Button
                className="bg-white hover:bg-white hover:bg-opacity-80 text-black text-lg"
                onClick={handlePrint}
              >
                <Printer />
              </Button>
              <Button
                className="md:text-lg text-sm bg-primary_Clr text-white hover:bg-primary_Clr hover:bg-opacity-80"
                onClick={handleExport}
              >
                Export <FolderUp />
              </Button>
            </div>
          </div>

          <div className="-mx-4 sm:-mx-6">
            <div className="inline-block w-full align-middle">
              <div className="overflow-x-auto border-x border-gray-200 dark:border-gray-700">
                <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <TableHeader className="bg-gray-200 dark:bg-gray-800">
                    <TableRow>
                      <TableCell className="sticky left-0 bg-gray-200 dark:bg-gray-800 font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        #
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Module
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Assignment Date
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Submission Date
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        File
                      </TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentAssignment?.length > 0 ? (
                      currentAssignment?.map((assignment: AssignmnetsTypes) => (
                        <TableRow
                          key={assignment?.id}
                          className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                          onClick={() =>
                            alert(
                              `Assignment ID: ${assignment?.id}. Assignment Module: ${assignment?.module}`
                            )
                          }
                        >
                          <TableCell className="sticky left-0 bg-gray-50 dark:bg-gray-900 py-3 px-4 whitespace-nowrap">
                            {assignment?.id}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {assignment?.title}
                          </TableCell>

                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {assignment?.created_at}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {assignment?.dateline}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            <a
                              href={assignment?.file || "#"}
                              download={assignment?.file}
                              className="text-green-600 hover:underline"
                            >
                              {assignment?.file}
                            </a>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={5}
                          className="text-center py-3 px-4 text-gray-500"
                        >
                          No Assignment found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          {filteredAssignments?.length > 0 && (
            <div className="flex items-center justify-between mt-4 px-4">
              <div className="text-sm text-gray-700 dark:text-gray-300">
                Showing {startIndex + 1} to
                {Math.min(endIndex, filteredAssignments.length)} of{" "}
                {filteredAssignments.length} teachers
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNum) => (
                    <Button
                      key={pageNum}
                      variant={pageNum === currentPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  )
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AssignmentTable;

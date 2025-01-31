"use client";

// import { doctorData } from "@/data/doctorData";
import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import DoctorsCard from "./DoctorCard";
import { DoctorType } from "@/types/type2";
import { Button } from "../ui/button";

const fetchDoctors = async (): Promise<DoctorType[]> => {
  try {
    const response = await axios.get("http://localhost:8000/api/doctor");
    // console.log("Doctor:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching doctors:", error);
    throw error;
  }
};

const DoctorList = () => {
  const {
    data: doctors,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: fetchDoctors,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [refetch]);

  const doctorsList = doctors || [];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-52 w-full">
        <div className="animate-spin rounded-full h-28 w-28 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-52 w-full text-center ">
        <div className="flex flex-col gap-6 items-center w-full">
          <h1 className="text-5xl font-bold text-red-500">
            <span>😞</span>Oops!
          </h1>
          <p className="text-2xl font-medium text-gray-700 dark:text-gray-200">
            Something went wrong.
          </p>
          <Button onClick={() => refetch}>Try again</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="mt-8">
        <h1 className="text-[35px] font-semibold py-4">Doctors</h1>
        <div className="grid auto-rows-min gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {doctorsList?.length > 0 ? (
            doctorsList?.map((doctor: DoctorType) => (
              <DoctorsCard
                key={doctor.id}
                id={doctor?.id}
                firstName={doctor?.firstName}
                lastName={doctor?.lastName}
                avater={doctor?.avater}
                specialization={doctor?.specialization}
              />
            ))
          ) : (
            <p>No Doctors Available</p>
          )}
        </div>
      </section>
    </>
  );
};

export default DoctorList;

"use client";

// import { doctorData } from "@/data/doctorData";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import DoctorsCard from "./DoctorCard";
import { DoctorType } from "@/types/type2";

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
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: fetchDoctors,
  });

  if (isLoading) return <div>Loading...</div>;
  const doctorsList = doctors || [];
  if (error) return <div>Error fetching doctors</div>;

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

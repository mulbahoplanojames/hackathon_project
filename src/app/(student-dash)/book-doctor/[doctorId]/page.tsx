import BookingForm from "@/components/book_doctor/booking-form/page";
import { Separator } from "@/components/ui/separator";
import { DoctorType } from "@/types/type2";
import axios from "axios";
import { CircleArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const generateStaticParams = async () => {
  const res = await axios.get("http://localhost:8000/api/doctor");
  const data = await res.data;

  return data?.map((doctor: DoctorType) => ({
    id: doctor?.id ? doctor.id.toString() : "",
  }));
};

const fetchDoctorInfo = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/doctor/${id}`);
    const data = await response.data;
    console.log("Doctor:", data);
    return data;
  } catch (error) {
    console.log("Error fetching doctorInfo:", error);
  }
};

const SingleDoctorPage = async ({
  params,
}: {
  params: { doctorId: string };
}) => {
  const doctor = await fetchDoctorInfo(params?.doctorId);
  // console.log("New Doc", doctor);

  return (
    <>
      <section className="px-6 py-8">
        <Link href="/book-doctor">
          <CircleArrowLeft className=" md:size-10 size-8 md:mb-6 mb-4" />
        </Link>
        <div className="w-full h-[20rem] md:mb-5 mb-3 rounded-lg bg-slate-100 relative overflow-hidden">
          <Image
            src={doctor?.avater ? doctor?.avater : "/user.jpg"}
            alt={doctor?.name}
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-2xl text-primary_Clr pb-2 font-semibold">
          {doctor.firstName}
        </h2>
        <div className="flex justify-between items-center py-2 flex-wrap">
          <p>
            <span className="font-bold text-primary_Clr text-lg">Gender:</span>
            &nbsp;
            {doctor?.gender}
          </p>
          <p>
            <span className="font-bold text-primary_Clr text-lg">
              Specialization:
            </span>
            &nbsp;
            {doctor?.specialization}
          </p>
        </div>
        <Separator />
        <div className="flex justify-between items-center py-2 flex-wrap">
          <p>
            <span className="font-bold text-primary_Clr text-lg">Contact:</span>
            &nbsp;
            {doctor?.phone}
          </p>
          <p>
            <span className="font-bold text-primary_Clr text-lg">
              Resident Hospital:
            </span>
            &nbsp;
            {doctor?.hospital}
          </p>
        </div>
        <p className="font-bold text-primary_Clr text-xl pb-2 pt-4">
          Doctor Bio:{" "}
        </p>
        <p className="text-lg">{doctor.bio}</p>
        <BookingForm name={doctor?.firstName} doctor_id={doctor?.id} />
      </section>
    </>
  );
};

export default SingleDoctorPage;

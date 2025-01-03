import Image from "next/image";
import {cards} from "@/data/doctorData";
import { doctorData } from "@/data/doctorData";

const BookDoctors = () => {
  
  return (
    <>
      <h1 className="text-[25px] font-semibold px-10 py-6">Book Doctor</h1>
      <div className="bg-[#f3f4f6] flex flex-col md:flex-row justify-between items-center p-4 md:pl-[2rem] md:pr-[2rem] md:ml-[4rem] md:mr-[4rem] h-[20rem] md:h-auto rounded-lg relative dark:bg-slate-800">
        <div className="pl-0 md:pl-[2rem] text-center md:text-left">
          <h1 className="text-[25px] md:text-[55px] font-semibold px-4 md:px-10 w-full md:w-[30rem]">
            Welcome back <span className="text-[#064e3b]">Student</span>
          </h1>
          <p className="text-[#000] text-[1rem] md:text-[1.3rem] px-4 md:px-10 py-2 w-full md:w-[30rem] dark:text-white">
            Book a doctor to check your health status, and always stay safe and
            healthy in your studies.
          </p>
        </div>
        <div className="right-[3rem] top-[-3rem] md:relative md:pr-[5rem] flex justify-center items-center w-full md:w-auto order-last md:order-none">
          <Image
            src="/female doctor at desk.svg"
            alt="doctor"
            width={200}
            height={200}
            className="w-full max-w-[200px] md:max-w-[300px] h-auto"
          />
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-[35px] font-semibold w-full text-center md:text-left px-8 py-4">
          Weekly Reports
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-4 justify-evenly">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md w-full max-w-[12rem] h-auto text-center border border-solid mx-auto"
            >
              <div className="flex justify-center items-center">
                <Image
                  src="/file article 1.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="bg-[#FDF5F1] text-white rounded-[25%] p-2"
                />
              </div>
              <h1 className="text-[15px] font-semibold mt-2">{card.title}</h1>
              <button className="bg-[#F3F4F6] hover:bg-[#064e3b] dark:hover:bg-slate-500 text-black hover:text-white font-semibold px-6 py-2 rounded-[12px] mt-2">
                {card.booking}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-[35px] font-semibold w-full text-center md:text-left px-8 mt-8">
          Doctors
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-[2rem] justify-center">
          {doctorData.map((doctor, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-[20px] overflow-hidden shadow-lg border border-gray-200 dark:border-slate-800 w-full sm:w-[15rem] md:w-auto h-[25rem] m-4"
            >
              <Image
                src={doctor.Image}
                alt=""
                width={80}
                height={300}
                className="w-full h-[12rem] object-cover"
              />
              <div className="p-4 flex flex-col items-start mt-4">
                <h1 className="text-xl font-semibold">{doctor.titile}</h1>
                <h2 className="text-primary_Clr mt-2">{doctor.description}</h2>
                <p className=" text-gray-500 dark:text-white w-[17rem] mt-2">
                  Commodo qui nulla ipsum ea cupidatat sit aliquip dolor.
                </p>
                <button className="bg-[#064e3b] text-white text-[12px] px-[3rem] py-2 rounded-[5px] mt-4">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookDoctors;

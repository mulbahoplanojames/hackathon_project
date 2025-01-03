"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = () => {
  const [selectedValue, setSelectedValue] = useState("Select Doctor");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Booking Complete.....", {
      onClose: () => {
        window.location.href="/";
      },
    });
  };

  return (
    <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-slate-800 w-full max-w-[80rem] h-auto mx-auto">
      <h1 className="text-start text-2xl font-bold mb-6">
        Book an Appointment
      </h1>
      <form
        className="flex flex-col space-y-4 border-2 border-black p-4 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="name" className="font-semibold mt-4 text-[1.2rem]">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="p-3 border border-gray-300 dark:border-none rounded-[12px] mt-4 outline-none"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label
              htmlFor="date"
              className="font-semibold ml-0 md:ml-[1.5rem] mt-4 text-[1.2rem]"
            >
              Preferred Date
            </label>
            <input
              type="text"
              id="date"
              name="date"
              placeholder="Enter your preferred date"
              className="p-3 mt-4 ml-0 md:ml-[1.5rem] border border-gray-300 dark:border-none rounded-[12px] outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="time" className="font-semibold mt-6 text-[1.2rem]">
              Preferred Time
            </label>
            <input
              type="text"
              id="time"
              name="time"
              placeholder="Enter your preferred time"
              className="p-3 border border-gray-300 dark:border-none rounded-[12px] mt-4 mb-0 md:mb-12 outline-none"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label
              htmlFor="doctor"
              className="font-semibold mt-6 ml-0 md:ml-[1.5rem] text-[1.2rem]"
            >
              Doctor Name
            </label>
            <select
              id="mySelect"
              value={selectedValue}
              onChange={handleChange}
              className="p-[.85rem] border border-gray-300 dark:border-none rounded-[12px] mt-4 ml-0 md:ml-[1.5rem] outline-none"
            >
              <option value="" className="text-gray-300">
                Select a doctor
              </option>
              <option value="Dr. John Doe">Dr. John Doe</option>
              <option value="Dr. Jane Doe">Dr. Jane Doe</option>
              <option value="Dr. Alex Smith">Dr. Alex Smith</option>
              <option value="Dr. Emily Clark">Dr. Emily Clark</option>
              <option value="Dr. Michael Brown">Dr. Michael Brown</option>
              <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="py-[.7rem] bg-primary_Clr text-white rounded-[18px] w-full md:w-[28rem] mt-[3rem]"
        >
          Book an Appointment now
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default BookingForm;

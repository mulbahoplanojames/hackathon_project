"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/formatDate";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCookie } from "cookies-next";
import { Bell } from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";

type AppointmentCreatedType = {
  id: string;
  created_at: string;
  notifiable_id: number;
  notifiable_type: string;
  data: {
    nofication: string;
    user: {
      description?: string;
      email: number;
      firstName: string;
      lastName: string;
      rollNumber: string;
      user_id: number;
    };
    apointment: {
      id: string;
      description: string;
      doctor_id: number;
      patient_name: string;
      prefared_date: string;
      user_id: number;
    };
  };
};

const fetchNotifications = async (id: string) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/notifications/user/${id}`
    );
    if (!response.data) {
      console.warn("No notifications found, using default data");
    }
    const data = await response.data;
    // console.log("Doctor notification: ", data);
    return data;
  } catch (error) {
    console.log("Error fetching notifications:", error);
  }
};

const approveAppointment = async (id: string) => {
  console.log("ID:", id);
  try {
    const response = await axios.put(
      `http://localhost:8000/api/apointment/aprove/${id}`
    );

    // console.log("Data", response.data);

    if (!response.data) {
      console.warn("No notifications found, using default data");
    }

    if (response.status === 200 || response.status === 201) {
      toast.success("Appointment Approved");
    }

    const data = await response.data;
    // console.log("Approve data:", data);
    return data;
  } catch (error) {
    console.log("Error fetching notifications:", error);
  }
};

const rejectAppointment = async (id: string) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/api/apointment/decline/${id}`
    );
    if (!response.data) {
      console.warn("No notifications found, using default data");
    }

    if (response.status === 200 || response.status === 201) {
      toast.success("Appointment Rejected");
    }

    const data = await response.data;
    // console.log("Reject data:", data);
    return data;
  } catch (error) {
    console.log("Error fetching notifications:", error);
  }
};

const Appointments = () => {
  const user = getCookie("user");
  const currentUser = user ? JSON.parse(user as string) : null;

  const {
    data: notification = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => fetchNotifications(currentUser?.id),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [refetch]);

  if (isLoading) {
    return (
      <div className="grid col-span-12 place-items-center h-72  w-[100%]">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid col-span-12 place-items-center h-72  w-full text-center bg-red-400">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-5xl font-bold text-red-500">Oops!</h1>
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
      <section className="p-4 pt-3">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {notification?.length > 0 ? (
            notification?.map((notification: AppointmentCreatedType) => (
              <Card
                key={notification.id}
                className="border-l-4 border-primary_Clr shadow-sm mb-6 h-fit"
              >
                <CardHeader className="flex items-center">
                  <Bell className="mr-2 text-primary_Clr" />
                  <CardTitle className="text-lg">
                    <span>💠</span>&nbsp;
                    {notification?.data?.nofication}&nbsp;
                    <span>💠</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-black dark:text-white">
                  <p className="text-lg ">
                    <span>🧑‍🎓</span>&nbsp;&nbsp;
                    <span>{notification?.data?.apointment?.patient_name}</span>
                    &nbsp;
                    <span>book an Appointment with you</span> &nbsp;
                  </p>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-base">
                        Appointment Details
                      </AccordionTrigger>
                      <AccordionContent className="text-base">
                        {notification?.data?.apointment?.description}
                      </AccordionContent>
                      <AccordionContent className="text-sm">
                        Schedule For: &nbsp;
                        {formatDate(
                          notification?.data?.apointment?.prefared_date
                        )}
                      </AccordionContent>
                      <AccordionContent className="text-sm flex space-x-3">
                        <Button
                          variant="destructive"
                          onClick={() =>
                            rejectAppointment(notification?.data.apointment?.id)
                          }
                        >
                          Reject
                        </Button>
                        <Button
                          onClick={() =>
                            approveAppointment(
                              notification?.data.apointment?.id
                            )
                          }
                        >
                          Approve
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))
          ) : (
            <h1>You don&apos;t have a notification yet</h1>
          )}
        </div>
      </section>
    </>
  );
};

export default Appointments;

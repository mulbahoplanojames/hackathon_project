"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/formatDate";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCookie } from "cookies-next";
import { Bell } from "lucide-react";
import { useEffect } from "react";

type AppointmentCreatedType = {
  id: string;
  created_at: string;
  notifiable_id: number;
  notifiable_type: string;
  data: {
    message: string;
    apointment: {
      description: string;
      doctor_id: number;
      patient_name: string;
      prefared_date: string;
      user_id: number;
    };
    doctor: {
      firstName: string;
      lastName: string;
      email: number;
      hospital: string;
      user_id: number;
    };
    assigment_title: string;
    user: {
      created_at: string;
      firstName: string;
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
    // console.log("Student notification: ", data);
    return data;
  } catch (error) {
    console.log("Error fetching notifications:", error);
  }
};

const NotificationsPage = () => {
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
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [refetch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error fetching notifications</h1>;
  }

  return (
    <>
      <section className="p-4 pt-3">
        <h1 className="text-3xl text-primary_Clr pb-4 ">Notifications</h1>
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
                    {notification?.data?.message}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-black dark:text-white">
                  {notification?.data?.user ? (
                    <p>
                      Bravo, keep up submitting you tasks. <span>🚀</span>
                    </p>
                  ) : (
                    <p className="text-base ">
                      <span>You have book a new Appointment with:</span> &nbsp;
                      <span>&nbsp;{notification?.data?.doctor?.firstName}</span>
                    </p>
                  )}

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      {notification?.data?.user ? (
                        <AccordionTrigger className="text-base">
                          📘 Assignmnets Details
                        </AccordionTrigger>
                      ) : (
                        <AccordionTrigger className="text-base">
                          📅 Appointment Details
                        </AccordionTrigger>
                      )}

                      {notification?.data?.user ? (
                        <>
                          <AccordionContent className="text-base">
                            Assignment Name: &nbsp;
                            {notification?.data?.assigment_title}
                          </AccordionContent>
                          <AccordionContent className="text-sm">
                            Assigned On: &nbsp;
                            {formatDate(notification?.data?.user?.created_at)}
                          </AccordionContent>
                        </>
                      ) : (
                        <>
                          <AccordionContent className="text-sm">
                            Hospital: &nbsp;
                            {notification?.data?.doctor?.hospital}
                          </AccordionContent>
                          <AccordionContent className="text-sm">
                            Schedule For: &nbsp;
                            {formatDate(
                              notification?.data?.apointment?.prefared_date
                            )}
                          </AccordionContent>
                        </>
                      )}
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

export default NotificationsPage;

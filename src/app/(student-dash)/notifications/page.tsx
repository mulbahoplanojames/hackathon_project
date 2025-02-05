"use client";

import DashboardHeader from "@/components/dashboard-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { formatDate } from "@/lib/formatDate";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCookie } from "cookies-next";
import { Bell, Send } from "lucide-react";
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
      `${process.env.NEXT_PUBLIC_LARAVEL_BASE_API_URL}/api/notifications/user/${id}`
    );
    if (!response.data) {
      console.warn("No notifications found, using default data");
    }
    const data = await response.data;
    console.log("Student notification: ", data);
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
        <DashboardHeader text="Notifications" />
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
                            Submitted On: &nbsp;
                            {formatDate(notification?.data?.user?.created_at)}
                          </AccordionContent>
                        </>
                      ) : (
                        <>
                          <AccordionContent className="text-sm">
                            Message: &nbsp;
                            {notification?.data?.apointment.description}
                          </AccordionContent>
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

                    {notification?.data?.user ? (
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-base">
                          📧 Comments
                        </AccordionTrigger>
                        <AccordionContent className="text-base flex items-center gap-2">
                          <Input placeholder="type something..." />
                          <Button size="icon">
                            <Send />
                          </Button>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <></>
                    )}
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

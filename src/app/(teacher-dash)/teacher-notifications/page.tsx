"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    assigment_title: string;
    file: string;
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
    // console.log("Lecturer notification: ", data);
    // console.log("response notification: ", response);
    return data;
  } catch (error) {
    console.log("Error fetching notifications:", error);
  }
};

const TeacherNotificationsPage = () => {
  const user = getCookie("user");
  const currentUser = user ? JSON.parse(user as string) : null;
  // console.log("Current", currentUser?.id);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["lecturer-notifications"],
    queryFn: () => fetchNotifications(currentUser?.id),
  });

  const handleDownload = (file: string) => {
    if (!file) return;
    const link = document.createElement("a");
    link.href = file;
    link.setAttribute("download", "Assignment.pdf");
    link.setAttribute("target", "_blank");
    link.style.display = "none";

    // Add to document
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 6000);

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
        <div className="">
          {data?.length > 0 ? (
            data?.map((notification: AppointmentCreatedType) => (
              <Card
                key={notification.id}
                className="border-l-4 border-primary_Clr shadow-sm mb-6"
              >
                <CardHeader className="flex items-center">
                  <Bell className="mr-2 text-primary_Clr" />
                  <CardTitle className="text-lg">
                    {notification?.data?.message}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-black dark:text-white">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-base">
                        Submitted Assignment Details
                      </AccordionTrigger>
                      <AccordionContent className="text-base">
                        <span>Assignment Title :</span> &nbsp;
                        {notification?.data?.assigment_title}
                      </AccordionContent>
                      <AccordionContent className="text-base">
                        <span>Attached File :</span> &nbsp;
                        {notification?.data?.file ? (
                          <a
                            href={notification?.data?.file}
                            download
                            onClick={(e) => {
                              e.preventDefault();
                              handleDownload(notification?.data?.file);
                            }}
                          >
                            {notification?.data?.assigment_title}.pdf
                          </a>
                        ) : (
                          <span>No file attached</span>
                        )}
                      </AccordionContent>
                      {/* <AccordionContent className="text-sm">
                        Schedule For: &nbsp;
                        {formatDate(
                          notification?.data?.apointment?.prefared_date
                        )}
                      </AccordionContent> */}
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

export default TeacherNotificationsPage;

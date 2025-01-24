"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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
    console.log("Noti data:", data);
    return data;
  } catch (error) {
    console.log("Error fetching notifications:", error);
  }
};

const TeacherNotificationsPage = () => {
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
    }, 10000);

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
          {notification?.length > 0 ? (
            notification?.map((notification: AppointmentCreatedType) => (
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
                <CardContent className="text-black">
                  <CardDescription className="text-lg">
                    {notification?.data?.apointment?.description}
                  </CardDescription>
                  <p>
                    <span>appointment to:</span>
                    {notification?.data?.apointment?.patient_name}
                  </p>
                  <div className="text-lg mt-2">
                    {/* <formatDate date={notification.created_at} /> */}
                  </div>
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

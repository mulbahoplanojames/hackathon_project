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

const NotificationsPage = () => {
  const user = getCookie("user");
  const currentUser = user ? JSON.parse(user as string) : null;

  const {
    data: notification = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => fetchNotifications(currentUser?.id),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error fetching notifications</h1>;
  }

  return (
    <>
      <section className="p-4 pt-3">
        <h1 className="text-3xl text-primary_Clr pb-4 relative w-[11rem] ">
          <span> Notifications</span>
          <span className="absolute w-3 h-3 bg-red-500 top-0 right-0 rounded-full animate-ping"></span>
        </h1>
        {/* <div className="">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className="border-l-4 border-primary_Clr shadow-sm mb-6"
            >
              <CardHeader className="flex items-center">
                <Bell className="mr-2 text-primary_Clr" />
                <CardTitle className="text-lg">{notification.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-black">
                <CardDescription className="text-lg">
                  {notification.description}
                </CardDescription>
                <div className="text-lg mt-2">{notification.time}</div>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </section>
    </>
  );
};

export default NotificationsPage;

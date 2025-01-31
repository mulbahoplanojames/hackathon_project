"use client";

import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCookie } from "cookies-next";

const fetchNotifications = async (userId: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_LARAVEL_BASE_API_URL}/api/notifications/user/${userId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export function NavProjects({
  projects,
}: {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const user = getCookie("user");
  const currentUser = user ? JSON.parse(user as string) : null;

  const { data } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => fetchNotifications(currentUser?.id),
  });

  const notificationCount = data?.length || 0;

  const pathname = usePathname();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Personal</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => {
          const isActive = pathname.startsWith(item.url);
          // const notificationCount = 7;

          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                className={`${
                  isActive ? "bg-primary_Clr text-white" : ""
                } hover:bg-primary_Clr hover:text-white`}
              >
                <Link href={item.url}>
                  {item.name === "Notifications" && (
                    <p className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 bg-red-600 text-white text-sm p-1 font-bold rounded-full">
                      <span>{notificationCount}</span>
                    </p>
                  )}
                  <item.icon />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

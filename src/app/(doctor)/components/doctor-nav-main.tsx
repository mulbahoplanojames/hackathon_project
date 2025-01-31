"use client";

import { type LucideIcon } from "lucide-react";

import { Collapsible } from "@/components/ui/collapsible";
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

export function DoctorNavMain({
  items,
}: {
  items: {
    title: string;
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

  const pathName = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Teacher Wroking Space</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathName.startsWith(item.url);
          return (
            <Collapsible key={item.title} asChild>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={`${
                    isActive ? "bg-primary_Clr text-white" : ""
                  } hover:bg-[#059678] hover:text-white`}
                >
                  <Link href={item.url}>
                    {item.title === "Appointments" && (
                      <p className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 bg-red-500 animate-pulse text-white text-sm p-1 font-bold rounded-full">
                        <span>{notificationCount}</span>
                      </p>
                    )}
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Settings,
  Bell,
  SquareLibrary,
  SquareTerminal,
  ShoppingBag,
  Stethoscope,
  MessageSquareText,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
    },
    {
      title: "Assignments",
      url: "/assignments",
      icon: BookOpen,
    },
    {
      title: "View Courses",
      url: "/courses",
      icon: SquareLibrary,
    },
    {
      title: "Study With Chat",
      url: "/study-with-chat",
      icon: Bot,
    },
    {
      title: "Book a Doctor",
      url: "/book-doctor",
      icon: Stethoscope,
    },
    {
      title: "Market Place",
      url: "/market-place",
      icon: ShoppingBag,
    },
  ],
  projects: [
    {
      name: "Messages",
      url: "#",
      icon: MessageSquareText,
    },
    {
      name: "Notifications",
      url: "#",
      icon: Bell,
    },
    {
      name: "Setting",
      url: "#",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary_Clr text-sidebar-primary-foreground ">
                  <Command className="size-4 " />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    Student Performance Hub
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

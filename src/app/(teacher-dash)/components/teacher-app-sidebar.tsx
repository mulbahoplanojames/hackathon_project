"use client";

import * as React from "react";
import {
  BookType,
  CopyPlus,
  SquareLibrary,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { TeacherNavMain } from "./teacher-nav-main";
import { NavTeacher } from "./nav-teacher";

const data = {
  user: {
    name: "Teacher Oplano",
    email: "teacheroplano@gmail.com.com",
    avatar: "/clients/client_1.svg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/teacher-dashboard",
      icon: SquareTerminal,
    },
    {
      title: "Courses",
      url: "/lecturer-courses",
      icon: BookType,
    },
    {
      title: "Add Courses",
      url: "/add-courses",
      icon: CopyPlus,
    },
    {
      title: "View Assignments",
      url: "/view-assignments",
      icon: SquareLibrary,
    },
  ],
};

export function TeacherAppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props} className="bg-primary_Clr">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <NavTeacher user={data.user} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <TeacherNavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}

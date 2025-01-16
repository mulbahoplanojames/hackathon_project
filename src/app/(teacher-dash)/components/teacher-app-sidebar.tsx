"use client";

import * as React from "react";
import {
  BookOpen,
  BookType,
  SquareLibrary,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { TeacherNavMain } from "./teacher-nav-main";
import { NavTeacher } from "./nav-teacher";
import { Calendar } from "@/components/ui/calendar";

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
      title: "Add Assignments",
      url: "/add-assignments",
      icon: BookOpen,
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
  const [date, setDate] = React.useState<Date | undefined>(new Date());
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
      <SidebarFooter>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow w-full text-sm"
        />
      </SidebarFooter>
    </Sidebar>
  );
}

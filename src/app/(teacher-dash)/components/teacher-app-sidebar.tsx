"use client";

import * as React from "react";
import {
  Bell,
  BookType,
  CopyPlus,
  DiamondPlus,
  MessageSquareText,
  Settings,
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
import { TeacherNavProjects } from "./teacher-nav-projects";

const data = {
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
    {
      title: "Add Marks",
      url: "/add-marks",
      icon: DiamondPlus,
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
      url: "/teacher-notifications",
      icon: Bell,
    },
    {
      name: "Setting",
      url: "#",
      icon: Settings,
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
            <NavTeacher />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <TeacherNavMain items={data.navMain} />
        <TeacherNavProjects projects={data.projects} />
      </SidebarContent>
    </Sidebar>
  );
}

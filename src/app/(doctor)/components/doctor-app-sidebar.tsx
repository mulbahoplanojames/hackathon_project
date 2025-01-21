"use client";

import * as React from "react";
import {
  Bell,
  // BookType,
  // CopyPlus,
  // MessageSquareText,
  // Settings,
  // SquareLibrary,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { DoctorNavMain } from "./doctor-nav-main";
import { NavDoctor } from "./nav-doctor";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/doctor-dashboard",
      icon: SquareTerminal,
    },
    {
      title: "Appointments",
      url: "/doctor-appointments",
      icon: Bell,
    },
  ],
};

export function DoctorAppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props} className="bg-primary_Clr">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <NavDoctor />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <DoctorNavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}

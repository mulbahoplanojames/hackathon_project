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

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const pathName = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Wroking Space</SidebarGroupLabel>
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
                  } hover:bg-primary_Clr hover:text-white`}
                >
                  <Link href={item.url}>
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

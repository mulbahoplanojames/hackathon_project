"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
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
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathName = usePathname();

  return (
    // <SidebarGroup>
    //   <SidebarGroupLabel>Wroking Space</SidebarGroupLabel>
    //   <SidebarMenu>
    //     {items.map((item) => {
    //       const isActive = pathName.startsWith(item.url);
    //       return (
    //         <Collapsible key={item.title} asChild>
    //           <SidebarMenuItem>
    //             <SidebarMenuButton
    //               asChild
    //               tooltip={item.title}
    //               className={`${
    //                 isActive ? "bg-primary_Clr text-white" : ""
    //               } hover:bg-[#059678] hover:text-white`}
    //             >
    //               <Link href={item.url}>
    //                 <item.icon />
    //                 <span>{item.title}</span>
    //               </Link>
    //             </SidebarMenuButton>
    //           </SidebarMenuItem>
    //         </Collapsible>
    //       );
    //     })}
    //   </SidebarMenu>
    // </SidebarGroup>

    <SidebarGroup>
      <SidebarGroupLabel>Wroking Space</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathName.startsWith(item.url);
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <Link href={item.url}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      className={`${
                        isActive ? "bg-primary_Clr text-white" : ""
                      } hover:bg-[#059678] hover:text-white`}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      {item.items && <ChevronRight className="ml-auto" />}
                    </SidebarMenuButton>
                  </Link>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          className={`${
                            isActive ? "bg-primary_Clr text-white" : ""
                          } hover:bg-[#059678] hover:text-white`}
                        >
                          <Link href={subItem.url}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

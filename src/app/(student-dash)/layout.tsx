import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import "../globals.css";
import { Input } from "@/components/ui/input";
import { Bell, Search } from "lucide-react";
import { ModeToggle } from "@/context/ ModeToggle";
import { ThemeProvider } from "@/context/theme-provider";

export const metadata = {
  title: "Student Performance Hub Dashboard",
  description:
    "This is the student performance hub dashboard, where students can view their performance and access resources.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2">
                <div className="flex items-center gap-2 px-4 w-full ">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumb className="w-full flex md:justify-between justify-end items-center gap-6">
                    <BreadcrumbItem className="hidden md:block w-[50%]">
                      <Input placeholder="Search" className="" />
                    </BreadcrumbItem>
                    <BreadcrumbItem className="space-x-4 flex items-center">
                      <Search className="cursor-pointer md:hidden block" />
                      <Bell className="cursor-pointer" />
                      <ModeToggle />
                    </BreadcrumbItem>
                  </Breadcrumb>
                </div>
              </header>

              {children}
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

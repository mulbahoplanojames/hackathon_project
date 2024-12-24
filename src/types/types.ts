import { LucideIcon } from "lucide-react";

export type NavLinksType = {
  label: string;
  path: string;
};

export type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

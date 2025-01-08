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

export type DoctorsCardsType = {
  title: string;
  description: string;
  imageSrc: string;
}

export type ReportCardsType = {
  description: string;
  booking: number;
}
export type TeamMembersType = {
  image: string;
}
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

export type CoursesType = {
  title: string;
  date: string;
  views: string;
  imageUrl: string;
  description: string;
}

export type CoursesPeriodType = {
  status: string;
  iconUrl: string;
  numberOfTime: string;
}

export type basicDestailsType = {
  heading: string;
  details: string;
}

export type TrustCompanysType = {
  ImageUrl: string;
}
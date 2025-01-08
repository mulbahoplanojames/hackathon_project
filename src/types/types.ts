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

export type footerLinksType = {
  heading: string;
  link1: string;
  link2: string;
  link3: string;
  link4: string;
  locateLink1: string;
  locateLink2: string;
  locateLink3: string;
  locateLink4: string;
}

export type TrustCompanysType = {
  ImageUrl: string;
}
import { LucideIcon } from "lucide-react";

export type NavLinksType = {
  label: string;
  path: string;
};

export type HowItWorksType = {
  id: number;
  step: string;
  title: string;
  image: string;
  description: string;
};

export type KeyFeaturesType = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ReviewType = {
  img: string;
  name: string;
  username: string;
  body: string;
};

export type DashBoardDataType = {
  id: number;
  label: string;
  icon: LucideIcon;
  count: number;
  percentage: string;
  color: string;
  bgColor?: string;
  attr?: string;
};

export type TeacherDataTypes = {
  id: number;
  name: string;
  department: string;
  email: string;
  module: string;
  rating: string;
};

export type GroupCardType = {
  name: string;
  description: string;
  image?: string;
};

type Link = {
  name: string;
  href: string;
};

export type FooterDataType = {
  title: string;
  links: Link[];
};

export type MarketplaceHeaderCardType = {
  id: number;
  title: string;
  count: number | string;
  image?: string;
  icon?: LucideIcon;
};

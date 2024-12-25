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

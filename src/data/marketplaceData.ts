import { MarketplaceHeaderCardType } from "@/types/types";
import { CircleDollarSign, Layers, Sparkles, Target } from "lucide-react";

export const marketplaceHeaderCardData: MarketplaceHeaderCardType[] = [
  {
    id: 1,
    title: "Total Revenue",
    count: 10,
    image: "/chart/Line_Chart.svg",
    icon: CircleDollarSign,
  },
  {
    id: 2,
    title: "Total Orders",
    count: 10,
    image: "/chart/Line_Chart1.svg",
    icon: Layers,
  },
  {
    id: 3,
    title: "Total Stars",
    count: 10,
    image: "/chart/Line_Chart2.svg",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Add Product ",
    count: "Upcoming Soon..",
    icon: Target,
  },
];

export const productTabData = [
  { label: "Books" },
  { label: "Computers" },
  { label: "Mouse" },
  { label: "Keyboard" },
  { label: "Tshirt" },
  { label: "Jackets" },
  { label: "Pants" },
  { label: "Hoodies" },
  { label: "Shorts" },
  { label: "Shoes" },
  { label: "Bags" },
  { label: "Caps" },
];

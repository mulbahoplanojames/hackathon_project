import { DashBoardDataType } from "@/types/types";
import {
  Activity,
  CalendarCheck2,
  ChartNoAxesCombined,
  CircleCheckBig,
} from "lucide-react";

export const dashBoardData: DashBoardDataType[] = [
  {
    id: 1,
    label: "Average Rating",
    icon: ChartNoAxesCombined,
    count: 7,
    percentage: "5%",
    color: "#a7f3df",
    bgColor: "#10b98c",
    attr: "Rating",
  },
  {
    id: 2,
    label: "Active Tasks",
    icon: CalendarCheck2,
    count: 12,
    percentage: "45%",
    color: "#ffe5a5",
    bgColor: "#ff7e00",
    attr: "Tasks",
  },
  {
    id: 3,
    label: "Completed Tasks",
    icon: CircleCheckBig,
    count: 5,
    percentage: "30%",
    color: "#bce6fb",
    bgColor: "#15a7e2",
    attr: "Tasks",
  },
  {
    id: 4,
    label: "New Assignments",
    icon: Activity,
    count: 2,
    percentage: "10%",
    color: "#f7d3eb",
    bgColor: "#e93e8f",
    attr: "Assignm..",
  },
];

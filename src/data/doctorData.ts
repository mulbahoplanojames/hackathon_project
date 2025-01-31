// import { ReportCardsType } from "@/types/type2";
import { Calendar } from "lucide-react";
import { IoMailUnreadOutline, IoBookmarksOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";

export const ReportsData = [
  {
    id: 1,
    description: "Total Books",
    booking: 8,
    icon: IoBookmarksOutline,
  },
  {
    id: 2,
    description: "Appointments",
    booking: 3,
    icon: Calendar,
  },
  {
    id: 3,
    description: "Unread Messages",
    booking: 18,
    icon: IoMailUnreadOutline,
  },
  {
    id: 4,
    description: "Doctors",
    booking: 6,
    icon: FaUserDoctor,
  },
];

export const doctorData = [
  {
    Image: "Image 24.svg",
    titile: "Dr. Emily Brown",
    description: "Neurology",
  },
  {
    Image: "doc 2.svg",
    titile: "Dr. John Doe",
    description: "Pediatrics",
  },
  {
    Image: "doc 3.svg",
    titile: "Dr. Jane Smith",
    description: "Cardiology",
  },
  {
    Image: "doc 4.svg",
    titile: "Dr. Michael Johnson",
    description: "Orthopedics",
  },
  {
    Image: "doc 5.svg",
    titile: "Dr. Sarah Williams",
    description: "Cardiology",
  },
  {
    Image: "doc 6.svg",
    titile: "Dr. Abdo Alie",
    description: "Cardiology",
  },
];

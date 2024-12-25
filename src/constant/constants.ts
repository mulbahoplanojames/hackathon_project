import { KeyFeaturesType } from "@/types/types";
import {
  Battery,
  Camera,
  CloudFog,
  MessageCircle,
  CircleCheckBig,
  BotMessageSquare,
} from "lucide-react";

export const keyFeaturesData: KeyFeaturesType[] = [
  {
    id: 1,
    icon: Camera,
    title: "Health Management",
    description:
      "Manage your physical and mental health with resources and tools designed for student wellness.",
  },
  {
    id: 2,
    icon: Battery,
    title: "E-Commerce Hub",
    description:
      "Shop for school supplies and materials conveniently through our integrated e-commerce platform.",
  },
  {
    id: 3,
    icon: BotMessageSquare,
    title: "AI Assistance",
    description:
      "Leverage AI technology to receive personalized recommendations and support for your studies.",
  },
  {
    id: 4,
    icon: MessageCircle,
    title: "Community Engagement",
    description:
      "Connect with peers, teachers, and parents to foster a supportive learning environment.",
  },
  {
    id: 5,
    icon: CloudFog,
    title: "Resource Management",
    description:
      "Access a wealth of educational resources, tutorials, and guides to enhance your learning experience.",
  },
  {
    id: 6,
    icon: CircleCheckBig,
    title: "Performance Tracking",
    description:
      "Stay on top of your academic goals with tools that help you track and improve your performance.",
  },
];

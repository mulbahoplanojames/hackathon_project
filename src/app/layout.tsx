import "./globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Not Found - Student Performance Hub Dashboard",
  description:
    "This is the student performance hub dashboard, where students can view their performance and access resources.",
};

export default function TeacherDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} w-full `}>{children}</body>
    </html>
  );
}

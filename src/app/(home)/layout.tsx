import type { Metadata } from "next";
import "../globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import { ThemeProvider } from "@/context/theme-provider";
import ScrollProgress from "@/components/ui/scroll-progress";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Student Performance Hub",
  description:
    "This is a student performance hub project. It is a web application that allows students to track their performance in school and contain a list of resources to help them improve their performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 py-24 ">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Student Performance Hub",
  description: "Student Performance Hub E-commerce Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

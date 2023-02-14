import HeaderBar from "@/components/HeaderBar/HeaderBar";
import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar />
        <HeaderBar />
        {children}
      </body>
    </html>
  );
}

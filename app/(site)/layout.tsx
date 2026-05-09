import type { Metadata } from "next";
import "../globals.css";

import { AuthProvider } from "@/context/AuthContext";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "SkillGuide",
  description: "Learn new skill or a hobby ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

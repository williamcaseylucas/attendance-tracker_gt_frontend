import AuthProvider from "@/app/components/AuthProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import NextProvider from "./components/NextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GT - VIP",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full h-screen">
          <NextProvider>
            <AuthProvider>
              
              {children}
            </AuthProvider>
          </NextProvider>
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import Header from "../components/userComponents/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "InsighTrack",
  description: "Main website for InsighTrack",
  icons: {
    icon: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#2a2929]">
        <Header />
        {children}
      </body>
    </html>
  );
}

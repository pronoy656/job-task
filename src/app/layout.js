import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Shared/Footer";
import { Rancho } from 'next/font/google';

const rancho = Rancho({
  subsets: ['latin'],
  weight: '400', // Rancho only supports 400
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TWEET | Restaurant",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

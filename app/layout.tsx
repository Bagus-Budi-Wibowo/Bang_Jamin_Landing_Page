import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { Header } from "@/src/core/components/layouts/header";
import localFont from 'next/font/local'
import Footer from "@/src/core/components/layouts/footer";
import MainProvider from "@/src/core/providers/main-provider";
import "./globals.css";

const chillax = localFont({
  src: [
    {
      path: "../public/assets/fonts/chillax/Chillax-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/chillax/Chillax-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/chillax/Chillax-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/chillax/Chillax-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/chillax/Chillax-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/chillax/Chillax-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bj-heading",
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-bj-content",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bang Jamin",
  description: "Bang Jamin Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${chillax.variable} ${mulish.variable} h-full antialiased`}
    >
      <body className="">
        <MainProvider>
          <Header />
          {children}
          <Footer />
        </MainProvider>
      </body>
    </html>
  );
}

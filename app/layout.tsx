import type { Metadata } from "next";
import { Geist, Geist_Mono , Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({

  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Next App",
  description: "Web development resources and tutorials",
  keywords: ["Next.js", "React", "JavaScript", "Web Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${roboto.variable} antialiased`}
      >
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}

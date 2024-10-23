import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chiranjiv Singh Malhi",
  description: "I'm a 3D designer based in India, creating game assets, characters, and environments with tools like Maya, Unreal Engine, and ZBrush.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/CSM.png" sizes="any" />
      <meta name="google-site-verification" content="zDfzj3OblamJXRZYpmiOPy1s8isuh3B7kEgtuerhwY0" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}

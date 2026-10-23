import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Abayneh | Portfolio",
  description:
    "5th Year Software Engineering Student | Student Union General Service Affairs | Graphic Design, Video Editing, Digital Marketing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable} data-theme="dark" style={{ background: "#05050f" }}>
      <body className="antialiased" style={{ background: "#05050f", color: "#f0f0f5", margin: 0 }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Bitcount_Prop_Double, Teachers } from "next/font/google";
import "./globals.css";
import PageShell from "@/components/PageShell";

const teachers = Teachers({
  variable: "--font-teachers",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const bitcount = Bitcount_Prop_Double({
  variable: "--font-bitcount",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Kukkai Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${teachers.variable} ${bitcount.variable} antialiased`}
    >
      <body className="flex flex-col font-sans">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}

import { nextflixSans } from "@/lib/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netflix TV screensaver",
  description:
    "A quick exploration on the idea behined the transitions in the Netflix TV screensaver effect"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nextflixSans.className}>
        <main className="overflow-hidden">{children}</main>
      </body>
    </html>
  );
}

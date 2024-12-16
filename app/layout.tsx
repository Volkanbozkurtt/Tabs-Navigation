"use client";

import "./globals.css";
import Tabs from "@/components/Tabs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Tabs />
      </body>
    </html>
  );
}

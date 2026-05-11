import "../globals.css";
import React from "react";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col bg-secondory">{children}</body>
    </html>
  );
}

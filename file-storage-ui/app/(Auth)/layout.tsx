import "../globals.css";
import React from "react";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import HomeHeader from "@/pages/Home/HomeHeader";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies()
  const user = cookieStore.get("user");

  if(!user) {
    redirect('/login')
  }

  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col bg-secondory">
      <HomeHeader />
      {children}
    </body>
    </html>
  );
}

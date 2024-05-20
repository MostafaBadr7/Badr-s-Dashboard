import MobileNav from "@/components/ui/MobileNav";
import { Sidebar } from "lucide-react";
import Image from "next/image";
import React from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName:'Mostafa', lastName: 'Badr'}

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="route-layout">
            <Image src='/icons/logo.svg'
             alt="logo" width={30} height={30} />
             <div>
              <MobileNav user={loggedIn} />
             </div>
          </div>
      {children}
        </div>
    </main>   
  );
}

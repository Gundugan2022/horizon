import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstname: 'Divine-Clinton', lastName: 'Ogundu'}
  return (
   <main className="flex h-screen w-full font-inter">
    <Sidebar user={loggedIn}/>

    <div className="flex size-full flex-col">
      <div className="root-layout">
        <Image width={30} height={30} alt="logo"  src="/icons.logo.svg"/>
        <div>
          <MobileNav user={loggedIn}/>
        </div>
      </div>
      {children}
    </div>
    
   </main>
  );
}

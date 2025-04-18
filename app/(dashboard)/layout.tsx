import type React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { DashboardNav } from "@/components/dashboard/DashboardNav";

// This is a mock authentication check
// In a real app, this would check if the user is authenticated
const isAuthenticated = () => {
   // Mock implementation - always returns true for demo purposes
   return true;
};

export default function DashboardLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   // Check if user is authenticated
   const authenticated = isAuthenticated();

   // If not authenticated, redirect to login page
   if (!authenticated) {
      redirect("/login");
   }

   return (
      <div className='flex min-h-screen flex-col bg-gray-950'>
         <header className='sticky top-0 z-30 border-b border-gray-800 '>
            <div className='container flex h-16 items-center justify-between py-4'>
               <Link href='/' className='flex items-center'>
                  <span className='font-heading text-2xl text-foreground'>
                     {/* <span className='text-primary-500'>Gymon</span> */}
                  </span>
               </Link>
            </div>
         </header>
         <div className='container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10'>
            <aside className='fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r border-gray-800 md:sticky md:block'>
               <DashboardNav />
            </aside>
            <main className='flex w-full flex-col overflow-hidden p-4 md:py-8'>
               {children}
            </main>
         </div>
      </div>
   );
}

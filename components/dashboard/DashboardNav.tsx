"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
   Calendar,
   User,
   Dumbbell,
   CreditCard,
   Settings,
   LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
   {
      title: "Account",
      href: "/dashboard/account",
      icon: User,
   },
   {
      title: "Schedule",
      href: "/dashboard/schedule",
      icon: Calendar,
   },
   {
      title: "My Classes",
      href: "/dashboard/classes",
      icon: Dumbbell,
   },
   {
      title: "Billing",
      href: "/dashboard/billing",
      icon: CreditCard,
   },
   {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
   },
];

export function DashboardNav() {
   const pathname = usePathname();

   return (
      <nav className='grid items-start px-2 py-8'>
         <div className='grid gap-2'>
            {navItems.map((item, index) => (
               <Link
                  key={index}
                  href={item.href}
                  className={cn(
                     "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground transition-colors",
                     pathname === item.href
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground"
                  )}
               >
                  <item.icon className='h-5 w-5' />
                  <span>{item.title}</span>
               </Link>
            ))}
            <Link
               href='/'
               className='flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors mt-6'
            >
               <LogOut className='h-5 w-5' />
               <span>Logout</span>
            </Link>
         </div>
      </nav>
   );
}

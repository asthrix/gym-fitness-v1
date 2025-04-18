"use client";

import { useState, useEffect, createContext, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet";

// Define the navigation links data structure
const navLinks = [
   { href: "/", label: "Home" },
   { href: "/about", label: "About" },
   { href: "/classes", label: "Classes" },
   { href: "/pricing", label: "Pricing" },
   { href: "/contact", label: "Contact" },
];

// Define the context type
type HeaderContextType = {
   isScrolled: boolean;
   isSheetOpen: boolean;
   setIsSheetOpen: (isOpen: boolean) => void;
   pathname: string;
   navLinks: { href: string; label: string }[];
   closeSheet: () => void;
};

// Create the context
const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

// Custom hook to use the header context
function useHeaderContext() {
   const context = useContext(HeaderContext);
   if (context === undefined) {
      throw new Error(
         "useHeaderContext must be used within a HeaderContextProvider"
      );
   }
   return context;
}

export function Header() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isSheetOpen, setIsSheetOpen] = useState(false);
   const pathname = usePathname();

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const closeSheet = () => {
      setIsSheetOpen(false);
   };

   // Create context value
   const contextValue = {
      isScrolled,
      isSheetOpen,
      setIsSheetOpen,
      pathname,
      navLinks,
      closeSheet,
   };

   return (
      <HeaderContext.Provider value={contextValue}>
         <header
            className={cn(
               "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
               isScrolled
                  ? "bg-background/90 backdrop-blur-sm py-2"
                  : "bg-transparent py-4"
            )}
         >
            <div className='container mx-auto px-4 flex items-center justify-between'>
               <Logo />
               <DesktopView />
               <MobileView />
            </div>
         </header>
      </HeaderContext.Provider>
   );
}

// Logo component
function Logo() {
   return (
      <Link href='/' className='flex items-center z-50'>
         <div className='relative h-10 w-32'>
            <span className='font-heading text-4xl flex items-center'>
               <span className='text-primary font-bebas'>Gymon</span>
            </span>
         </div>
      </Link>
   );
}

// Desktop view component
function DesktopView() {
   const { pathname, navLinks } = useHeaderContext();

   return (
      <>
         <nav className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
               <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                     "text-sm font-medium transition-colors hover:text-primary",
                     pathname === link.href ? "text-primary" : "text-foreground"
                  )}
               >
                  {link.label}
               </Link>
            ))}
         </nav>

         <div className='hidden md:flex items-center space-x-4'>
            {/* <ThemeToggle /> */}
            <Button asChild>
               <Link href='/contact'>Contact us</Link>
            </Button>
            <Button variant='ghost' size='icon' asChild>
               <Link href='/account' title='My Profile'>
                  <User className='h-4 w-4' />
                  <span className='sr-only'>My Profile</span>
               </Link>
            </Button>
         </div>
      </>
   );
}

// Mobile view component
function MobileView() {
   const { isSheetOpen, setIsSheetOpen, pathname, navLinks, closeSheet } =
      useHeaderContext();

   return (
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
         <SheetTrigger asChild>
            <Button
               variant='ghost'
               size='icon'
               className='md:hidden z-50'
               aria-label='Open menu'
            >
               <Menu size={24} />
            </Button>
         </SheetTrigger>
         <SheetContent side='right' className='p-0 w-full'>
            <SheetHeader className='p-6 border-b border-border'>
               <SheetTitle className=''>
                  <Logo />
               </SheetTitle>
            </SheetHeader>
            <nav className='flex flex-col p-6'>
               {navLinks.map((link) => (
                  <Link
                     key={link.href}
                     href={link.href}
                     className={cn(
                        "py-3 text-lg font-medium transition-colors hover:text-primary",
                        pathname === link.href
                           ? "text-primary"
                           : "text-foreground"
                     )}
                     onClick={closeSheet}
                  >
                     {link.label}
                  </Link>
               ))}

               <div className='mt-6 pt-6 border-t border-border space-y-4'>
                  <Button asChild className='w-full' onClick={closeSheet}>
                     <Link href='/contact'>Contact us</Link>
                  </Button>
                  <Button
                     variant='outline'
                     asChild
                     onClick={closeSheet}
                     className='w-full'
                  >
                     <Link
                        href='/account'
                        className='flex items-center justify-center gap-2'
                     >
                        <User className='h-4 w-4' />
                        My Profile
                     </Link>
                  </Button>
                  <div className='flex justify-center pt-2'>
                     {/* <ThemeToggle /> */}
                  </div>
               </div>
            </nav>
         </SheetContent>
      </Sheet>
   );
}

// Main Header component

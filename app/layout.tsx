import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import Providers from "@/components/providers/Providers";
import { bebasNeue, inter } from "@/utils/fonts";

// Load Inter font for body text

// Load Bebas Neue for headings
// const bebasNeue = localFont({
//    src: "../assets/fonts/BebasNeue-Regular.ttf",
//    variable: "--font-bebas-neue",
//    display: "swap",
// });

export const metadata: Metadata = {
   title: "Gymon | Transform Your Life With Fitness",
   description:
      "Join us to achieve your fitness goals with our state-of-the-art facilities, expert trainers, and supportive community.",
   keywords: [
      "gym",
      "fitness",
      "workout",
      "personal training",
      "classes",
      "health",
   ],
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en' suppressHydrationWarning className='scroll-smooth '>
         <body
            className={`${inter.variable} ${bebasNeue.variable} font-inter text-foreground antialiased dark`}
         >
            <Providers>
               <div className='flex min-h-screen flex-col'>
                  <Header />
                  <main className='flex-1'>{children}</main>
                  <Footer />
               </div>
            </Providers>
         </body>
      </html>
   );
}

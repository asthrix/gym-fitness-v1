"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

interface CTAProps {
   title?: string;
   subtitle?: string;
   primaryButtonText?: string;
   primaryButtonLink?: string;
   secondaryButtonText?: string;
   secondaryButtonLink?: string;
   className?: string;
   backgroundImage?: string | StaticImageData;
}

export function CTA({
   title = "Ready to Transform Your Life?",
   subtitle = "Join Gymon today and start your fitness journey with our expert trainers and state-of-the-art facilities.",
   primaryButtonText = "Join Now",
   primaryButtonLink = "/pricing",
   secondaryButtonText = "Learn More",
   secondaryButtonLink = "/about",
   className,
   backgroundImage,
}: CTAProps) {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.5 });

   return (
      <section
         ref={ref}
         className={cn(
            "py-20 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden noise-overlay",
            className
         )}
      >
         {/* Background Image */}
         {backgroundImage && (
            <div className='absolute inset-0 z-0'>
               {typeof backgroundImage === "string" ? (
                  <div
                     className='w-full h-full bg-cover bg-center opacity-20'
                     style={{ backgroundImage: `url(${backgroundImage})` }}
                  />
               ) : (
                  <Image
                     src={backgroundImage}
                     alt='Background'
                     fill
                     className='object-cover opacity-20'
                  />
               )}
               <div className='absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-80' />
            </div>
         )}

         <div className='container mx-auto px-4 relative z-10'>
            <motion.div
               className='max-w-3xl mx-auto text-center'
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 0.5 }}
            >
               <h2 className='text-4xl md:text-5xl font-heading mb-4 text-foreground'>
                  {title}
               </h2>
               <p className='text-xl text-muted-foreground mb-8'>{subtitle}</p>
               <div className='flex flex-col sm:flex-row justify-center gap-4'>
                  <Button asChild size='lg' className='text-lg px-8'>
                     <Link href={primaryButtonLink}>{primaryButtonText}</Link>
                  </Button>
                  <Button
                     asChild
                     size='lg'
                     variant='outline'
                     className='text-lg px-8'
                  >
                     <Link href={secondaryButtonLink}>
                        {secondaryButtonText}
                     </Link>
                  </Button>
               </div>
            </motion.div>
         </div>

         {/* Decorative elements */}
         <div className='absolute -bottom-16 -left-16 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl' />
         <div className='absolute -top-16 -right-16 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl' />
      </section>
   );
}

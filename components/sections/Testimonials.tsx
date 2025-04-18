"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
   id: string;
   quote: string;
   name: string;
   title: string;
   image: string;
}

interface TestimonialsProps {
   title?: string;
   subtitle?: string;
   testimonials: Testimonial[];
   className?: string;
}

export function Testimonials({
   title = "What Our Members Say",
   subtitle = "Hear from our community about their fitness journey with us",
   testimonials,
   className,
}: TestimonialsProps) {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.1 });

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2,
         },
      },
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.5,
            ease: "easeOut",
         },
      },
   };

   return (
      <section ref={ref} className={cn("py-20 bg-background", className)}>
         <div className='container mx-auto px-4'>
            <motion.div
               className='text-center max-w-3xl mx-auto mb-16'
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 0.5 }}
            >
               <h2 className='text-4xl md:text-5xl font-heading mb-4 text-foreground'>
                  {title}
               </h2>
               <p className='text-xl text-gray-400'>{subtitle}</p>
            </motion.div>

            <motion.div
               className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
               variants={containerVariants}
               initial='hidden'
               animate={isInView ? "visible" : "hidden"}
            >
               {testimonials.map((testimonial) => (
                  <motion.div
                     key={testimonial.id}
                     className='bg-card p-8 rounded-lg border border-border relative'
                     variants={itemVariants}
                  >
                     <Quote className='text-primary-500 mb-4 h-8 w-8' />
                     <p className='text-muted-foreground mb-8 italic'>
                        {testimonial.quote}
                     </p>
                     <div className='flex items-center'>
                        <div className='relative w-12 h-12 rounded-full overflow-hidden mr-4'>
                           <Image
                              src={
                                 testimonial.image ||
                                 "/placeholder.svg?height=100&width=100"
                              }
                              alt={testimonial.name}
                              fill
                              className='object-cover'
                           />
                        </div>
                        <div>
                           <h4 className='text-foreground font-medium'>
                              {testimonial.name}
                           </h4>
                           <p className='text-gray-400 text-sm'>
                              {testimonial.title}
                           </p>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   );
}

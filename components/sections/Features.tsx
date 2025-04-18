"use client";

import type React from "react";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Dumbbell, Users, Clock, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
   icon: React.ReactNode;
   title: string;
   description: string;
}

interface FeaturesProps {
   title?: string;
   subtitle?: string;
   features?: Feature[];
   className?: string;
}

export function Features({
   title = "Why Choose Us",
   subtitle = "We provide the best fitness experience with top-notch equipment and expert trainers",
   className,
   features = [
      {
         icon: <Dumbbell className='h-10 w-10 text-primary-500' />,
         title: "Modern Equipment",
         description:
            "State-of-the-art fitness equipment to help you achieve your goals faster and more efficiently.",
      },
      {
         icon: <Users className='h-10 w-10 text-primary-500' />,
         title: "Expert Trainers",
         description:
            "Our certified trainers will guide you through your fitness journey with personalized plans.",
      },
      {
         icon: <Clock className='h-10 w-10 text-primary-500' />,
         title: "Flexible Hours",
         description:
            "Open early until late, our gym fits your schedule with extended hours throughout the week.",
      },
      {
         icon: <Award className='h-10 w-10 text-primary-500' />,
         title: "Premium Classes",
         description:
            "From HIIT to yoga, our diverse class offerings cater to all fitness levels and interests.",
      },
   ],
}: FeaturesProps) {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
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
      <section ref={ref} className={cn("py-20 ", className)}>
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
               <p className='text-xl text-muted-foreground'>{subtitle}</p>
            </motion.div>

            <motion.div
               className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
               variants={containerVariants}
               initial='hidden'
               animate={isInView ? "visible" : "hidden"}
            >
               {features.map((feature, index) => (
                  <motion.div
                     key={index}
                     className='bg-card p-8 rounded-lg hover:bg-muted transition-colors duration-300 border border-border'
                     variants={itemVariants}
                  >
                     <div className='mb-4'>{feature.icon}</div>
                     <h3 className='text-xl font-heading mb-3 text-foreground'>
                        {feature.title}
                     </h3>
                     <p className='text-muted-foreground'>
                        {feature.description}
                     </p>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   );
}

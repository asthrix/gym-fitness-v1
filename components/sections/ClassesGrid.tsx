"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface GymClass {
   id: string;
   title: string;
   description: string;
   image: string;
   duration: string;
   intensity: "Beginner" | "Intermediate" | "Advanced";
   trainer: {
      name: string;
      image: string;
   };
}

interface ClassesGridProps {
   title?: string;
   subtitle?: string;
   classes: GymClass[];
   showFilters?: boolean;
   className?: string;
}

export function ClassesGrid({
   title = "Our Classes",
   subtitle = "Find the perfect class to match your fitness goals",
   classes,
   showFilters = true,
   className,
}: ClassesGridProps) {
   const [filter, setFilter] = useState<string>("all");
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.1 });

   const filteredClasses =
      filter === "all"
         ? classes
         : classes.filter((c) => c.intensity.toLowerCase() === filter);

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
               className='text-center max-w-3xl mx-auto mb-12'
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 0.5 }}
            >
               <h2 className='text-4xl md:text-5xl font-heading mb-4 text-foreground'>
                  {title}
               </h2>
               <p className='text-xl text-gray-400'>{subtitle}</p>
            </motion.div>

            {showFilters && (
               <div className='flex flex-wrap justify-center gap-4 mb-12'>
                  <Button
                     variant={filter === "all" ? "default" : "outline"}
                     onClick={() => setFilter("all")}
                     className='min-w-24'
                  >
                     All
                  </Button>
                  <Button
                     variant={filter === "beginner" ? "default" : "outline"}
                     onClick={() => setFilter("beginner")}
                     className='min-w-24'
                  >
                     Beginner
                  </Button>
                  <Button
                     variant={filter === "intermediate" ? "default" : "outline"}
                     onClick={() => setFilter("intermediate")}
                     className='min-w-24'
                  >
                     Intermediate
                  </Button>
                  <Button
                     variant={filter === "advanced" ? "default" : "outline"}
                     onClick={() => setFilter("advanced")}
                     className='min-w-24'
                  >
                     Advanced
                  </Button>
               </div>
            )}

            <motion.div
               className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
               variants={containerVariants}
               initial='hidden'
               animate={isInView ? "visible" : "hidden"}
            >
               {filteredClasses.map((gymClass) => (
                  <motion.div
                     key={gymClass.id}
                     className='bg-card rounded-lg overflow-hidden border border-border group hover:border-primary-500 transition-all duration-300'
                     variants={itemVariants}
                  >
                     <div className='relative h-64 overflow-hidden'>
                        <Image
                           src={
                              gymClass.image ||
                              "/placeholder.svg?height=400&width=600"
                           }
                           alt={gymClass.title}
                           fill
                           className='object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/2' />
                        <Badge
                           className='absolute top-4 right-4'
                           variant={
                              gymClass.intensity === "Beginner"
                                 ? "outline"
                                 : gymClass.intensity === "Intermediate"
                                 ? "secondary"
                                 : "default"
                           }
                        >
                           {gymClass.intensity}
                        </Badge>
                     </div>
                     <div className='p-6'>
                        <div className='flex items-center justify-between mb-3'>
                           <h3 className='text-xl font-heading text-foreground'>
                              {gymClass.title}
                           </h3>
                           <span className='text-sm text-gray-400'>
                              {gymClass.duration}
                           </span>
                        </div>
                        <p className='text-gray-400 mb-4 line-clamp-2'>
                           {gymClass.description}
                        </p>
                        <div className='flex items-center justify-between'>
                           <div className='flex items-center'>
                              <div className='relative w-8 h-8 rounded-full overflow-hidden mr-2'>
                                 <Image
                                    src={
                                       gymClass.trainer.image ||
                                       "/placeholder.svg?height=100&width=100"
                                    }
                                    alt={gymClass.trainer.name}
                                    fill
                                    className='object-cover'
                                 />
                              </div>
                              <span className='text-sm text-gray-400'>
                                 {gymClass.trainer.name}
                              </span>
                           </div>
                           <Button
                              variant='link'
                              asChild
                              className='p-0 h-auto text-primary-500'
                           >
                              <Link href={`/classes/${gymClass.id}`}>
                                 View Details
                              </Link>
                           </Button>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </motion.div>

            <div className='text-center mt-12'>
               <Button asChild size='lg'>
                  <Link href='/classes'>View All Classes</Link>
               </Button>
            </div>
         </div>
      </section>
   );
}

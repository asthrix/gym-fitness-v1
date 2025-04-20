"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar } from "lucide-react";
import {
   PLACEHOLDER_CARD,
   PLACEHOLDER_AVATAR,
   getImageById,
   CLASS_IMAGES,
   TRAINER_IMAGES,
} from "@/constants/assets";

interface GymClass {
   id: string;
   title: string;
   description: string;
   image: string | StaticImageData;
   duration: string;
   intensity: "Beginner" | "Intermediate" | "Advanced";
   category: string;
   schedule: Array<{ day: string; time: string }>;
   trainer: {
      id: string;
      name: string;
      image: string | StaticImageData;
   };
}

interface ClassCardProps {
   gymClass: GymClass;
   showSchedule?: boolean;
}

export function ClassCard({ gymClass, showSchedule = false }: ClassCardProps) {
   // Get the appropriate image for the class and trainer using our asset system
   const classImage = gymClass.id
      ? getImageById(gymClass.id, CLASS_IMAGES)
      : gymClass.image || PLACEHOLDER_CARD;
   const trainerImage = gymClass.trainer.id
      ? getImageById(gymClass.trainer.id, TRAINER_IMAGES)
      : gymClass.trainer.image || PLACEHOLDER_AVATAR;

   return (
      <motion.div
         className='bg-card rounded-lg overflow-hidden border border-border group hover:border-primary transition-all duration-300'
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
      >
         <div className='relative h-64 overflow-hidden'>
            <Image
               src={classImage}
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
            <Badge className='absolute top-4 left-4' variant='outline'>
               {gymClass.category}
            </Badge>
         </div>
         <div className='p-6'>
            <div className='flex items-center justify-between mb-3'>
               <h3 className='text-xl font-heading text-foreground'>
                  {gymClass.title}
               </h3>
               <div className='flex items-center text-muted-foreground'>
                  <Clock className='h-4 w-4 mr-1' />
                  <span className='text-sm'>{gymClass.duration}</span>
               </div>
            </div>
            <p className='text-muted-foreground mb-4 line-clamp-3'>
               {gymClass.description}
            </p>

            {showSchedule && (
               <div className='mb-4'>
                  <h4 className='text-foreground font-medium mb-2 flex items-center'>
                     <Calendar className='h-4 w-4 mr-2' /> Schedule
                  </h4>
                  <ul className='space-y-1 text-sm text-muted-foreground'>
                     {gymClass.schedule.map((slot, index) => (
                        <li key={index} className='flex justify-between'>
                           <span>{slot.day}</span>
                           <span>{slot.time}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            )}

            <div className='flex items-center justify-between'>
               <div className='flex items-center'>
                  <div className='relative w-8 h-8 rounded-full overflow-hidden mr-2'>
                     <Image
                        src={trainerImage}
                        alt={gymClass.trainer.name}
                        fill
                        className='object-cover'
                     />
                  </div>
                  <span className='text-sm text-muted-foreground'>
                     {gymClass.trainer.name}
                  </span>
               </div>
               <Button
                  variant='link'
                  asChild
                  className='p-0 h-auto text-primary'
               >
                  <Link href={`/classes/${gymClass.id}`}>View Details</Link>
               </Button>
            </div>
         </div>
      </motion.div>
   );
}

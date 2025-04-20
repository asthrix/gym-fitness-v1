"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogDescription,
} from "@/components/ui/dialog";
import {
   Calendar,
   Clock,
   User,
   ChevronLeft,
   CalendarIcon,
   Play,
   Pause,
} from "lucide-react";
import { ClassBookingForm } from "@/components/sections/ClassBookingForm";
import { classesData } from "@/data/classes";
import {
   CLASS_DEFAULT_VIDEO,
   CLASS_TRAINING_VIDEO,
   CLASS_WORKOUT_VIDEO,
   CLASS_FITNESS_VIDEO,
} from "@/constants/assets";

interface ClassDetailContentProps {
   gymClass: (typeof classesData)[0];
}

export function ClassDetailContent({ gymClass }: ClassDetailContentProps) {
   const [isBookingOpen, setIsBookingOpen] = useState(false);
   const [isPlaying, setIsPlaying] = useState(false);
   const videoRef = useRef<HTMLVideoElement>(null);

   // Determine which video to use based on class category
   const getVideoForClass = () => {
      switch (gymClass.category.toLowerCase()) {
         case "cardio":
            return CLASS_FITNESS_VIDEO;
         case "strength":
            return CLASS_TRAINING_VIDEO;
         case "mind & body":
            return CLASS_WORKOUT_VIDEO;
         case "combat":
            return CLASS_TRAINING_VIDEO;
         default:
            return CLASS_DEFAULT_VIDEO;
      }
   };

   const togglePlayPause = () => {
      if (videoRef.current) {
         if (isPlaying) {
            videoRef.current.pause();
         } else {
            videoRef.current.play();
         }
         setIsPlaying(!isPlaying);
      }
   };

   return (
      <>
         {/* Hero Section */}
         <div className='bg-'></div>
         <section className='relative pt-24 pb-16  overflow-hidden noise-overlay'>
            <div className='absolute inset-0 z-0'>
               <Image
                  src={gymClass.image || "/placeholder.svg"}
                  alt={gymClass.title}
                  fill
                  className='object-cover opacity-40'
                  priority
               />
               <div className='absolute inset-0 bg-gradient-to-b from-black/60 to-black' />
            </div>

            <div className='container mx-auto px-4 relative z-10'>
               <Link
                  href='/classes'
                  className='inline-flex items-center text-gray-400 hover:text-foreground mb-6'
               >
                  <ChevronLeft className='h-4 w-4 mr-1' /> Back to Classes
               </Link>

               <div className='max-w-4xl'>
                  <div className='flex flex-wrap items-center gap-3 mb-4'>
                     <Badge variant='outline'>{gymClass.category}</Badge>
                     <Badge
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

                  <h1 className='text-4xl md:text-6xl font-heading mb-6 text-foreground'>
                     {gymClass.title}
                  </h1>

                  <div className='flex flex-wrap gap-6 text-muted-foreground mb-8'>
                     <div className='flex items-center'>
                        <Clock className='h-5 w-5 mr-2 text-primary-500' />
                        <span>{gymClass.duration}</span>
                     </div>
                     <div className='flex items-center'>
                        <User className='h-5 w-5 mr-2 text-primary-500' />
                        <span>Instructor: {gymClass.trainer.name}</span>
                     </div>
                     <div className='flex items-center'>
                        <Calendar className='h-5 w-5 mr-2 text-primary-500' />
                        <span>
                           {gymClass.schedule.length} sessions per week
                        </span>
                     </div>
                  </div>

                  <Button size='lg' onClick={() => setIsBookingOpen(true)}>
                     Book This Class
                  </Button>
               </div>
            </div>
         </section>

         {/* Class Details Section */}
         <SectionContainer className=''>
            <div className='grid md:grid-cols-3 gap-12'>
               <div className='md:col-span-2'>
                  <h2 className='text-3xl font-heading mb-6 text-foreground'>
                     About This Class
                  </h2>
                  <p className='text-muted-foreground mb-8'>
                     {gymClass.description}
                  </p>

                  {/* Class Preview Video */}
                  <div className='relative aspect-video mb-10 rounded-lg overflow-hidden'>
                     <video
                        ref={videoRef}
                        className='w-full h-full object-cover'
                        poster={
                           typeof gymClass.image === "string"
                              ? gymClass.image
                              : undefined
                        }
                        onEnded={() => setIsPlaying(false)}
                     >
                        <source src={getVideoForClass()} type='video/mp4' />
                        Your browser does not support the video tag.
                     </video>
                     <div
                        className={`absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer transition-opacity ${
                           isPlaying
                              ? "opacity-0 hover:opacity-100"
                              : "opacity-100"
                        }`}
                        onClick={togglePlayPause}
                     >
                        <div className='bg-primary/80 hover:bg-primary p-4 rounded-full'>
                           {isPlaying ? (
                              <Pause className='h-8 w-8 text-white' />
                           ) : (
                              <Play className='h-8 w-8 text-white' />
                           )}
                        </div>
                     </div>
                  </div>

                  <h3 className='text-2xl font-heading mb-4 text-foreground'>
                     Benefits
                  </h3>
                  <ul className='list-disc pl-6 mb-8 text-muted-foreground space-y-2'>
                     {gymClass.benefits?.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                     ))}
                  </ul>

                  <h3 className='text-2xl font-heading mb-4 text-foreground'>
                     What to Bring
                  </h3>
                  <ul className='list-disc pl-6 mb-8 text-muted-foreground space-y-2'>
                     {gymClass.requirements?.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                     ))}
                  </ul>
               </div>

               <div>
                  <div className='bg-card rounded-lg p-6 border border-border sticky top-24'>
                     <h3 className='text-xl font-heading mb-4 text-foreground flex items-center'>
                        <CalendarIcon className='h-5 w-5 mr-2 text-primary-500' />{" "}
                        Class Schedule
                     </h3>
                     <ul className='space-y-4'>
                        {gymClass.schedule.map((slot, index) => (
                           <li
                              key={index}
                              className='border-b border-gray-800 pb-3 last:border-0 last:pb-0'
                           >
                              <div className='font-medium text-foreground'>
                                 {slot.day}
                              </div>
                              <div className='text-gray-400'>{slot.time}</div>
                           </li>
                        ))}
                     </ul>

                     <Button
                        className='w-full mt-6'
                        onClick={() => setIsBookingOpen(true)}
                     >
                        Book Now
                     </Button>
                  </div>
               </div>
            </div>
         </SectionContainer>

         {/* Booking Dialog */}
         <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
            <DialogContent className='sm:max-w-[500px] bg-card border-border'>
               <DialogHeader>
                  <DialogTitle className='text-2xl font-heading'>
                     Book {gymClass.title}
                  </DialogTitle>
                  <DialogDescription>
                     Select a date and time to book your class session.
                  </DialogDescription>
               </DialogHeader>
               <ClassBookingForm
                  gymClass={gymClass}
                  onSuccess={() => setIsBookingOpen(false)}
               />
            </DialogContent>
         </Dialog>
      </>
   );
}

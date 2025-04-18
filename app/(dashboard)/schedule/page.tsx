"use client";

import { useState } from "react";
import { format, startOfWeek, addDays, isSameDay } from "date-fns";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";

// Sample data for booked classes
const bookedClasses = [
   {
      id: "1",
      title: "HIIT Training",
      date: new Date(2023, 4, 15, 6, 0), // May 15, 2023, 6:00 AM
      duration: "45 min",
      trainer: "Alex Johnson",
      location: "Studio A",
   },
   {
      id: "2",
      title: "Yoga Flow",
      date: new Date(2023, 4, 17, 8, 0), // May 17, 2023, 8:00 AM
      duration: "50 min",
      trainer: "Michael Chen",
      location: "Studio B",
   },
   {
      id: "3",
      title: "Strength & Conditioning",
      date: new Date(2023, 4, 18, 7, 0), // May 18, 2023, 7:00 AM
      duration: "60 min",
      trainer: "Sarah Miller",
      location: "Main Floor",
   },
];

export default function SchedulePage() {
   const [date, setDate] = useState<Date>(new Date());
   const [weekStart, setWeekStart] = useState<Date>(
      startOfWeek(new Date(), { weekStartsOn: 1 })
   );

   // Function to get classes for a specific date
   const getClassesForDate = (date: Date) => {
      return bookedClasses.filter((cls) => isSameDay(cls.date, date));
   };

   // Function to get classes for the current week
   const getClassesForWeek = () => {
      const weekDays = Array.from({ length: 7 }, (_, i) =>
         addDays(weekStart, i)
      );
      return weekDays.map((day) => ({
         date: day,
         classes: getClassesForDate(day),
      }));
   };

   // Navigate to previous week
   const previousWeek = () => {
      setWeekStart(addDays(weekStart, -7));
   };

   // Navigate to next week
   const nextWeek = () => {
      setWeekStart(addDays(weekStart, 7));
   };

   const weekSchedule = getClassesForWeek();

   return (
      <>
         <div className='flex flex-col gap-4 md:gap-8'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
               <div>
                  <h1 className='text-3xl font-heading text-foreground mb-2'>
                     My Schedule
                  </h1>
                  <p className='text-gray-400'>
                     View and manage your booked classes
                  </p>
               </div>

               <div className='flex items-center gap-2'>
                  <Popover>
                     <PopoverTrigger asChild>
                        <Button
                           variant='outline'
                           className='flex items-center gap-2'
                        >
                           <CalendarIcon className='h-4 w-4' />
                           <span>{format(date, "MMMM yyyy")}</span>
                        </Button>
                     </PopoverTrigger>
                     <PopoverContent className='w-auto p-0 bg-gray-900 border-gray-800'>
                        <Calendar
                           mode='single'
                           selected={date}
                           onSelect={(date) => date && setDate(date)}
                           initialFocus
                        />
                     </PopoverContent>
                  </Popover>
               </div>
            </div>

            {/* Weekly Schedule View */}
            <Card className='bg-gray-900 border-gray-800'>
               <CardHeader className='flex flex-row items-center justify-between'>
                  <div>
                     <CardTitle className='text-foreground'>
                        Weekly Schedule
                     </CardTitle>
                     <CardDescription>
                        {format(weekStart, "MMMM d")} -{" "}
                        {format(addDays(weekStart, 6), "MMMM d, yyyy")}
                     </CardDescription>
                  </div>
                  <div className='flex items-center gap-2'>
                     <Button
                        variant='outline'
                        size='icon'
                        onClick={previousWeek}
                     >
                        <ChevronLeft className='h-4 w-4' />
                     </Button>
                     <Button variant='outline' size='icon' onClick={nextWeek}>
                        <ChevronRight className='h-4 w-4' />
                     </Button>
                  </div>
               </CardHeader>
               <CardContent>
                  <div className='grid grid-cols-1 md:grid-cols-7 gap-4'>
                     {weekSchedule.map((day, index) => (
                        <div
                           key={index}
                           className={cn(
                              "border border-gray-800 rounded-lg overflow-hidden",
                              isSameDay(day.date, new Date()) &&
                                 "border-primary-500"
                           )}
                        >
                           <div className='bg-gray-800 p-2 text-center'>
                              <div className='text-sm text-gray-400'>
                                 {format(day.date, "EEE")}
                              </div>
                              <div className='text-lg font-medium text-foreground'>
                                 {format(day.date, "d")}
                              </div>
                           </div>
                           <div className='p-2 min-h-[100px]'>
                              {day.classes.length > 0 ? (
                                 <div className='space-y-2'>
                                    {day.classes.map((cls) => (
                                       <div
                                          key={cls.id}
                                          className='bg-gray-800 p-2 rounded text-sm'
                                       >
                                          <div className='font-medium text-foreground'>
                                             {cls.title}
                                          </div>
                                          <div className='text-gray-400'>
                                             {format(cls.date, "h:mm a")}
                                          </div>
                                          <div className='text-gray-400'>
                                             {cls.duration}
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              ) : (
                                 <div className='h-full flex items-center justify-center text-sm text-gray-500'>
                                    No classes
                                 </div>
                              )}
                           </div>
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>

            {/* Upcoming Classes */}
            <Card className='bg-gray-900 border-gray-800'>
               <CardHeader>
                  <CardTitle className='text-foreground'>
                     Upcoming Classes
                  </CardTitle>
                  <CardDescription>Your next scheduled classes</CardDescription>
               </CardHeader>
               <CardContent>
                  <div className='space-y-4'>
                     {bookedClasses.length > 0 ? (
                        bookedClasses.map((cls) => (
                           <div
                              key={cls.id}
                              className='flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border border-gray-800 rounded-lg'
                           >
                              <div>
                                 <div className='flex items-center gap-2'>
                                    <h3 className='text-lg font-medium text-foreground'>
                                       {cls.title}
                                    </h3>
                                    <Badge variant='outline'>
                                       {cls.duration}
                                    </Badge>
                                 </div>
                                 <div className='text-gray-400 mt-1'>
                                    Instructor: {cls.trainer}
                                 </div>
                                 <div className='text-gray-400'>
                                    Location: {cls.location}
                                 </div>
                              </div>
                              <div className='flex flex-col items-end'>
                                 <div className='text-foreground font-medium'>
                                    {format(cls.date, "EEEE, MMMM d")}
                                 </div>
                                 <div className='text-primary-500'>
                                    {format(cls.date, "h:mm a")}
                                 </div>
                                 <Button
                                    variant='outline'
                                    size='sm'
                                    className='mt-2'
                                 >
                                    Cancel Booking
                                 </Button>
                              </div>
                           </div>
                        ))
                     ) : (
                        <div className='text-center py-8'>
                           <p className='text-gray-400'>
                              You don't have any upcoming classes.
                           </p>
                           <Button className='mt-4'>Browse Classes</Button>
                        </div>
                     )}
                  </div>
               </CardContent>
            </Card>
         </div>
      </>
   );
}

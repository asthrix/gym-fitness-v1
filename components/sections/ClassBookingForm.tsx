"use client";

import type React from "react";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
// import { useToast } from "@/hooks/use-toast"

interface GymClass {
   id: string;
   title: string;
   schedule: Array<{ day: string; time: string }>;
}

interface ClassBookingFormProps {
   gymClass: GymClass;
   onSuccess: () => void;
}

export function ClassBookingForm({
   gymClass,
   onSuccess,
}: ClassBookingFormProps) {
   const [date, setDate] = useState<Date>();
   const [selectedTime, setSelectedTime] = useState<string>("");
   const [isSubmitting, setIsSubmitting] = useState(false);
   // const { toast } = useToast()

   // Get available days based on the class schedule
   const availableDays = gymClass.schedule.map((slot) =>
      slot.day.toLowerCase()
   );

   // Function to check if a date is available based on the class schedule
   const isDateAvailable = (date: Date) => {
      const day = format(date, "EEEE").toLowerCase();
      return availableDays.includes(day);
   };

   // Get available times for the selected date
   const getAvailableTimes = (date: Date | undefined) => {
      if (!date) return [];

      const day = format(date, "EEEE");
      return gymClass.schedule
         .filter((slot) => slot.day === day)
         .map((slot) => slot.time);
   };

   const availableTimes = date ? getAvailableTimes(date) : [];

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!date || !selectedTime) {
         toast.error("Missing information", {
            description: "Please select both a date and time for your booking.",
         });
         return;
      }

      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
         toast("Booking Successful!", {
            description: `You've booked ${gymClass.title} on ${format(
               date,
               "MMMM do, yyyy"
            )} at ${selectedTime}.`,
         });
         setIsSubmitting(false);
         onSuccess();
      }, 1500);
   };

   return (
      <form onSubmit={handleSubmit} className='space-y-6 pt-4'>
         <div className='space-y-2'>
            <label className='text-sm font-medium text-muted-foreground'>
               Date
            </label>
            <Popover>
               <PopoverTrigger asChild>
                  <Button
                     variant='outline'
                     className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                     )}
                  >
                     <CalendarIcon className='mr-2 h-4 w-4' />
                     {date ? format(date, "PPP") : <span>Select a date</span>}
                  </Button>
               </PopoverTrigger>
               <PopoverContent className='w-auto p-0 bg-card border-border'>
                  <Calendar
                     mode='single'
                     selected={date}
                     onSelect={setDate}
                     disabled={(date) => {
                        // Disable dates in the past
                        const isPast =
                           date < new Date(new Date().setHours(0, 0, 0, 0));
                        // Disable dates that don't match the class schedule
                        const isAvailable = isDateAvailable(date);
                        return isPast || !isAvailable;
                     }}
                     initialFocus
                  />
               </PopoverContent>
            </Popover>
            {date && !isDateAvailable(date) && (
               <p className='text-sm text-red-500'>
                  This class is not available on this day.
               </p>
            )}
         </div>

         <div className='space-y-2'>
            <label className='text-sm font-medium text-muted-foreground'>
               Time
            </label>
            <Select
               disabled={!date || availableTimes.length === 0}
               onValueChange={setSelectedTime}
            >
               <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a time' />
               </SelectTrigger>
               <SelectContent className='bg-card border-border'>
                  {availableTimes.map((time) => (
                     <SelectItem key={time} value={time}>
                        {time}
                     </SelectItem>
                  ))}
               </SelectContent>
            </Select>
         </div>

         <div className='flex justify-end gap-4 pt-4'>
            <Button type='button' variant='outline' onClick={onSuccess}>
               Cancel
            </Button>
            <Button
               type='submit'
               disabled={!date || !selectedTime || isSubmitting}
            >
               {isSubmitting ? "Booking..." : "Confirm Booking"}
            </Button>
         </div>
      </form>
   );
}
